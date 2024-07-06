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
    "Agent OS": "#ff9999",
    "User Mang": "#ff6666",
    "Agent Mang": "#66b3ff",
    "Conversation Mang": "#6699ff",
    "File Mang": "#d9d9d9",
    "RAG Pipeline": "#8fd9b6",
    "Integrations": "#c2c2f0",
    "Tools": "#ffb3e6",
    "Analytics": "#ffcc99",
}

# Add nodes with positions
positions = {
    "Agent OS": (10, 8),
    "User Mang": (6, 8),
    "Agent Mang": (14, 8),
    "Conversation Mang": (8, 6),
    "RAG Pipeline": (10, 4),
    "Integrations": (8, 4),
    "Tools": (12, 4),
    "File Mang": (12, 6),
    "Analytics": (10, 2),
}

for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Add edges to represent relationships
relationships = [
    ("Agent OS", "User Mang"),
    ("Agent OS", "Agent Mang"),
    ("Agent OS", "Conversation Mang"),
    ("Agent OS", "File Mang"),
    ("Agent OS", "RAG Pipeline"),
    ("Agent OS", "Integrations"),
    ("Agent OS", "Tools"),
    ("Agent OS", "Analytics"),
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
plt.savefig('./static/img/docs/architecture_core_components_diagram.png', bbox_inches='tight', facecolor=fig.get_facecolor())

plt.show()
