import matplotlib.pyplot as plt
import networkx as nx
import math

# Create a figure and axis
fig, ax = plt.subplots(figsize=(20, 12))
fig.patch.set_facecolor('black')
ax.set_facecolor('black')

# Define the graph
G = nx.DiGraph()

# Define colors for different entity groupings
colors = {
    "users": "#ff9999",
    "applications": "#66b3ff",
    "agent_types": "#99ff99",
    "threads": "#ffcc99",
    "conversations": "#c2c2f0",
    "thread_groups": "#ffb3e6",
    "files": "#c2c2f0",
    "agent_threads": "#f7b7a3",
    "prompt_templates": "#8fd9b6",
    "models": "#d9d9d9",
    "agent_subscriptions": "#ffcc99",
    "tools": "#f4e1d2",
    "vectors": "#c4e17f"
}

# Add nodes with positions
positions = {
    "users": (0, 2),
    "applications": (2, 2),
    "agent_types": (4, 2),
    "threads": (1, 1),
    "tools": (0, 1),
    "conversations": (1.5, 0),
    "thread_groups": (3, 1),
    "files": (0, 0),
    "agent_threads": (5, 1),
    "prompt_templates": (0, -1),
    "models": (4, -1),
    "agent_subscriptions": (5, -0.5),
    "vectors": (3, -1)
}

for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Add edges to represent relationships
relationships = [
    ("users", "threads"),
    ("threads", "conversations"),
    ("threads", "applications"),
    ("threads", "agent_types"),
    ("threads", "agent_threads"),
    ("files", "threads"),
    ("thread_groups", "threads"),
    ("prompt_templates", "threads"),
    ("models", "threads"),
    ("agent_subscriptions", "users"),
    ("agent_subscriptions", "agent_threads"),
    ("tools", "agent_threads"),
    ("vectors", "files"),
    ("vectors", "conversations"),
    ("thread_groups", "agent_threads")
]

for source, target in relationships:
    G.add_edge(source, target)

# Draw nodes
pos = nx.get_node_attributes(G, 'pos')
nx.draw_networkx_nodes(G, pos, node_size=11000, node_color=[colors[node] for node in G.nodes()], ax=ax)

# Draw labels within the circles
for node, (x, y) in pos.items():
    ax.text(x, y, node, color='black', ha='center', va='center', fontsize=9, fontweight='bold')

# Draw edges
nx.draw_networkx_edges(G, pos, edgelist=G.edges(), arrowstyle='-|>', arrowsize=20, edge_color='white', ax=ax)

# Hide axes
ax.axis('off')

# Save the figure
plt.savefig('./static/img/docs/architecture_database_flowchart.png', bbox_inches='tight', facecolor=fig.get_facecolor())

plt.show()
