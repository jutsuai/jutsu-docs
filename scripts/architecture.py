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
    "agents": "#66b3ff",
    "agent_configs": "#99ff99",
    "agent_subscriptions": "#ffcc99",
    "prompts": "#ffcc99",
    "models": "#d9d9d9",
    "tools": "#f4e1d2",
    "conversations": "#c2c2f0",
    "messages": "#ffb3e6",
    "conversation_groups": "#f7b7a3",
    "conversation_gr_mem": "#8fd9b6",
    "files": "#c2c2f0",
    "file_conversations": "#c4e17f",
    "file_agents": "#d9d9d9",
    "vectors": "#c4e17f",
    "analytics": "#8fd9b6"
}

# Add nodes with positions
positions = {
    "users": (0, 2),
    "agents": (2, 2),
    "agent_configs": (4, 2),
    "agent_subscriptions": (6, 2),
    "prompts": (8, 2),
    "models": (10, 2),
    "tools": (12, 2),
    "conversations": (2, 1),
    "messages": (4, 1),
    "conversation_groups": (6, 1),
    "conversation_gr_mem": (8, 1),
    "files": (0, 0),
    "file_conversations": (2, 0),
    "file_agents": (4, 0),
    "vectors": (6, 0),
    "analytics": (8, 0)
}

for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Add edges to represent relationships
relationships = [
    ("users", "agents"),
    ("agents", "agent_configs"),
    ("users", "agent_subscriptions"),
    ("agents", "agent_subscriptions"),
    ("users", "prompts"),
    ("prompts", "conversations"),
    ("models", "agents"),
    ("tools", "agents"),
    ("conversations", "messages"),
    ("agents", "conversations"),
    ("conversations", "conversation_groups"),
    ("conversation_groups", "conversation_gr_mem"),
    ("users", "files"),
    ("files", "file_conversations"),
    ("files", "file_agents"),
    ("files", "vectors"),
    ("conversations", "analytics"),
    ("users", "analytics"),
    ("agents", "analytics"),
    ("messages", "analytics")
]

for source, target in relationships:
    G.add_edge(source, target)

# Draw nodes
pos = nx.get_node_attributes(G, 'pos')
nx.draw_networkx_nodes(G, pos, node_size=13000, node_color=[colors[node] for node in G.nodes()], ax=ax)

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
