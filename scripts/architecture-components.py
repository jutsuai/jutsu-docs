import matplotlib.pyplot as plt
import networkx as nx

# Create a figure and axis
fig, ax = plt.subplots(figsize=(20, 12))
fig.patch.set_facecolor('black')
ax.set_facecolor('black')

# Define the graph
G = nx.DiGraph()

# Define colors for different entity groupings
colors = {
    "Orchestration API": "#ff9999",
    "User Management": "#ff6666",
    "Agent Management": "#66b3ff",
    "Conversation Mang": "#6699ff",
    "Analytics": "#ffcc99",
    "File Management": "#d9d9d9",
    "RAG Pipeline & API": "#8fd9b6",
    "Integrations API": "#c2c2f0"
}

# Add nodes with positions
positions = {
    "Orchestration API": (10, 8),
    "User Management": (8, 6),
    "Agent Management": (12, 6),
    "Conversation Mang": (10, 4),
    "Analytics": (6, 4),
    "File Management": (14, 4),
    "RAG Pipeline & API": (8, 2),
    "Integrations API": (12, 2)
}

for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Add edges to represent relationships
relationships = [
    ("Orchestration API", "User Management"),
    ("Orchestration API", "Agent Management"),
    ("Orchestration API", "Conversation Mang"),
    ("Orchestration API", "Analytics"),
    ("Orchestration API", "File Management"),
    ("User Management", "RAG Pipeline & API"),
    ("Agent Management", "RAG Pipeline & API"),
    ("Conversation Mang", "RAG Pipeline & API"),
    ("File Management", "RAG Pipeline & API"),
    ("Orchestration API", "Integrations API"),
    ("RAG Pipeline & API", "Integrations API")
]

for source, target in relationships:
    G.add_edge(source, target)

# Draw nodes
pos = nx.get_node_attributes(G, 'pos')
nx.draw_networkx_nodes(G, pos, node_size=13000, node_color=[colors[node] for node in G.nodes()], ax=ax)

# Draw labels within the circles
for node, (x, y) in pos.items():
    ax.text(x, y, node, color='black', ha='center', va='center', fontsize=10, fontweight='bold')

# Draw edges
nx.draw_networkx_edges(G, pos, edgelist=G.edges(), arrowstyle='-|>', arrowsize=20, edge_color='white', ax=ax)

# Hide axes
ax.axis('off')

# Save the figure
plt.savefig('./static/img/docs/architecture_components_diagram.png', bbox_inches='tight', facecolor=fig.get_facecolor())

plt.show()
