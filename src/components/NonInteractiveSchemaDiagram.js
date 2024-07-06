import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const NonInteractiveSchemaDiagram = () => {
    const svgRef = useRef();

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

        const g = svg.append('g');

        const simulation = d3.forceSimulation(data.nodes)
            .force('link', d3.forceLink(data.links).id(d => d.id).distance(450))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('x', d3.forceX().strength(0.1))
            .force('y', d3.forceY().strength(0.1))
            .force('cluster', clusterForce)
            .force('collide', d3.forceCollide(70))
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
            .attr('class', 'link')
            .style('stroke', '#999')
            .style('stroke-opacity', 0.6)
            .style('stroke-width', 2);

        const node = g.append('g')
            .selectAll('g')
            .data(data.nodes)
            .enter().append('g')
            .attr('class', 'node');

        node.append('circle')
            .attr('r', 30)
            .style('fill', getColor);

        node.append('text')
            .attr('dy', -3)
            .attr('dx', 34)
            .text(d => d.id)
            .style('font-size', '12px')
            .style('fill', '#fff');

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

        function clusterForce(alpha) {
            const clusters = {};
            data.nodes.forEach(d => {
                if (!clusters[d.group]) clusters[d.group] = d;
                const cluster = clusters[d.group];
                const k = alpha * 0.1;
                d.vx -= (d.x - cluster.x) * k;
                d.vy -= (d.y - cluster.y) * k;
            });
        }
    }, []);

    return <svg className={'non-interactive-schema-diagram'} ref={svgRef}></svg>;
};

export default NonInteractiveSchemaDiagram;
