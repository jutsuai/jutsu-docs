import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const InteractiveSchemaDiagram = () => {
    const svgRef = useRef();
    const [zoomLevel, setZoomLevel] = useState(0.5);
    const [rotationCenter, setRotationCenter] = useState({ x: 480, y: 400 });

    useEffect(() => {
        const data = {
            nodes: [
                { id: "Users", group: "A" },
                { id: "Roles", group: "A" },
                { id: "Permissions", group: "A" },
                { id: "RolePermissions", group: "A" },
                { id: "Agents", group: "B" },
                { id: "AgentConfigs", group: "B" },
                { id: "AgentSubscriptions", group: "B" },
                { id: "Prompts", group: "C" },
                { id: "Models", group: "C" },
                { id: "Tools", group: "D" },
                { id: "Integrations", group: "D" },
                { id: "Conversations", group: "E" },
                { id: "Messages", group: "E" },
                { id: "ConversationGroups", group: "E" },
                { id: "GroupMemberships", group: "E" },
                { id: "Files", group: "F" },
                { id: "FileConversations", group: "F" },
                { id: "FileAgents", group: "F" },
                { id: "Vectors", group: "F" },
                { id: "Analytics", group: "G" }
            ],
            links: [
                { source: "Users", target: "Roles" },
                { source: "Roles", target: "RolePermissions" },
                { source: "Permissions", target: "RolePermissions" },
                { source: "Users", target: "Agents" },
                { source: "Agents", target: "AgentConfigs" },
                { source: "Users", target: "AgentSubscriptions" },
                { source: "Agents", target: "AgentSubscriptions" },
                { source: "Users", target: "Prompts" },
                { source: "Prompts", target: "Conversations" },
                { source: "Models", target: "Agents" },
                { source: "Tools", target: "Agents" },
                { source: "Integrations", target: "Agents" },
                { source: "Conversations", target: "Messages" },
                { source: "Agents", target: "Conversations" },
                { source: "Conversations", target: "ConversationGroups" },
                { source: "ConversationGroups", target: "GroupMemberships" },
                { source: "Users", target: "Files" },
                { source: "Files", target: "FileConversations" },
                { source: "Files", target: "FileAgents" },
                { source: "Files", target: "Vectors" },
                { source: "Conversations", target: "Analytics" },
                { source: "Users", target: "Analytics" },
                { source: "Agents", target: "Analytics" },
                { source: "Messages", target: "Analytics" }
            ]
        };

        const width = 960;
        const height = 800;

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const zoom = d3.zoom()
            .scaleExtent([0.5, 3])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
                setZoomLevel(event.transform.k.toFixed(1));
            });

        svg.call(zoom);

        const g = svg.append('g');

        const simulation = d3.forceSimulation(data.nodes)
            .force('link', d3.forceLink(data.links).id(d => d.id).distance(200))
            .force('charge', d3.forceManyBody().strength(-500))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .on('tick', () => {
                link.attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);

                node.attr('transform', d => `translate(${d.x},${d.y})`);
            });

        const link = g.append('g')
            .selectAll('line')
            .data(data.links)
            .enter().append('line')
            .attr('class', 'link');

        const node = g.append('g')
            .selectAll('g')
            .data(data.nodes)
            .enter().append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        node.append('circle')
            .attr('r', 20)
            .style('fill', getColor);

        node.append('text')
            .attr('dy', -3)
            .attr('dx', 25)
            .text(d => d.id)
            .style('font-size', '15px');

        node.on('mouseover', (event, d) => {
            svg.selectAll('.link')
                .classed('highlighted', l => l.source.id === d.id || l.target.id === d.id)
                .style('stroke', l => (l.source.id === d.id || l.target.id === d.id) ? 'white' : '')
                .style('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? '2px' : '2px')
                .transition()
                .duration(200)
                .style('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? '2px' : '2px');
        }).on('mouseout', () => {
            svg.selectAll('.link')
                .classed('highlighted', false)
                .style('stroke', '')
                .style('stroke-width', '2px')
                .transition()
                .duration(200)
                .style('stroke-width', '2px');
        }).on('mousedown', (event, d) => {
            setRotationCenter({ x: d.x, y: d.y });
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        function getColor(d) {
            const colorMap = {
                "A": "#ff6347",  // Tomato
                "B": "#1e90ff",  // DodgerBlue
                "C": "#ffd700",  // Gold
                "D": "#32cd32",  // LimeGreen
                "E": "#9370db",  // MediumPurple
                "F": "#ff69b4",  // HotPink
                "G": "#ff4500"   // OrangeRed
            };
            return colorMap[d.group];
        }

        function rotateNodes() {
            const angle = 0.0001; // Rotation angle per tick
            simulation.nodes().forEach(node => {
                const { x, y } = rotationCenter;
                const dx = node.x - x;
                const dy = node.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const currentAngle = Math.atan2(dy, dx);
                const newAngle = currentAngle + angle;
                node.x = x + distance * Math.cos(newAngle);
                node.y = y + distance * Math.sin(newAngle);
            });
            simulation.alpha(1).restart(); // Reheat simulation
        }

        d3.timer(rotateNodes);

    }, [rotationCenter]);

    return <svg className={'interactive-schema-diagram'} ref={svgRef}></svg>;
};

export default InteractiveSchemaDiagram;
