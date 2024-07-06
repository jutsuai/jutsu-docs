import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const NonInteractiveSchemaDiagram = () => {
    const svgRef = useRef();

    useEffect(() => {
        const data = {
            name: "Root",
            children: [
                {
                    name: "Users",
                    children: [
                        { name: "Analytics" },
                        { name: "Roles" },
                        { name: "Permissions" },
                        { name: "RolePermissions" },
                        {
                            name: "Agents",
                            children: [
                                { name: "AgentConfigs" },
                                { name: "AgentSubscriptions" },
                                { name: "Models" },
                                { name: "Prompts" },
                                { name: "Tools" },
                                { name: "Integrations" }
                            ]
                        },
                        { name: "Files", children: [
                                { name: "FileConversations" },
                                { name: "FileAgents" },
                                { name: "Vectors" }
                            ]},
                        {
                            name: "Conversations",
                            children: [
                                { name: "Messages" },
                                { name: "ConversationGroups" },
                                { name: "GroupMemberships" }
                            ]
                        }
                    ]
                }
            ]
        };

        const svg = d3.select(svgRef.current);
        const container = svg.node().parentNode;
        const margin = { top: 20, right: 160, bottom: 20, left: 50 };

        const updateSize = () => {
            const width = container.clientWidth - margin.right - margin.left;
            const height = container.clientHeight - margin.top - margin.bottom;

            svg.attr('width', width + margin.right + margin.left)
                .attr('height', height + margin.top + margin.bottom);

            svg.selectAll('*').remove();

            const g = svg.append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            const root = d3.hierarchy(data);

            const treeLayout = d3.tree().size([height, width]);

            treeLayout(root);

            g.selectAll('line')
                .data(root.links())
                .enter()
                .append('line')
                .attr('x1', d => d.source.y)
                .attr('y1', d => d.source.x)
                .attr('x2', d => d.target.y)
                .attr('y2', d => d.target.x)
                .attr('stroke', '#555');

            g.selectAll('circle')
                .data(root.descendants())
                .enter()
                .append('circle')
                .attr('cx', d => d.y)
                .attr('cy', d => d.x)
                .attr('r', 10)
                .attr('fill', d => getColor(d));

            g.selectAll('text')
                .data(root.descendants())
                .enter()
                .append('text')
                .attr('x', d => d.y)
                .attr('y', d => d.x)
                .attr('dy', '0.31em')
                .attr('dx', d => d.children ? -12 : 12)
                .attr('text-anchor', d => d.children ? 'end' : 'start')
                .text(d => d.data.name)
                .attr('font-size', '12px')
                .attr('fill', '#fff');

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

                const groupColorMap = {
                    "Users": colorMap["A"],
                    "Roles": colorMap["A"],
                    "Permissions": colorMap["A"],
                    "RolePermissions": colorMap["A"],
                    "Agents": colorMap["B"],
                    "AgentConfigs": "#87cefa",  // LightSkyBlue
                    "AgentSubscriptions": "#4682b4",  // SteelBlue
                    "Prompts": colorMap["C"],
                    "Models": "#ffd700",  // LightGoldenRodYellow
                    "Tools": colorMap["D"],
                    "Integrations": "#66cdaa",  // MediumAquaMarine
                    "Conversations": colorMap["E"],
                    "Messages": "#dda0dd",  // Plum
                    "ConversationGroups": "#ba55d3",  // MediumOrchid
                    "GroupMemberships": "#8a2be2",  // BlueViolet
                    "Files": colorMap["F"],
                    "FileConversations": "#ff1493",  // DeepPink
                    "FileAgents": "#db7093",  // PaleVioletRed
                    "Vectors": "#ffb6c1",  // LightPink
                    "Analytics": colorMap["G"]
                };

                return groupColorMap[d.data.name];
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return <svg className={'non-interactive-schema-diagram'} width={960} height={800} ref={svgRef}></svg>;
};

export default NonInteractiveSchemaDiagram;
