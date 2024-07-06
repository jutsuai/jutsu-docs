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
    "roles": "#ff6666",
    "perms": "#ff6666",
    "role_perms": "#ff6666",
    "agents": "#66b3ff",
    "ag_cfg": "#6699ff",
    "ag_subs": "#6699ff",
    "prompts": "#ffcc99",
    "models": "#d9d9d9",
    "tools": "#f4e1d2",
    "integrations": "#c2c2f0",
    "convos": "#c2c2f0",
    "msgs": "#ffb3e6",
    "convo_grps": "#f7b7a3",
    "grp_mems": "#8fd9b6",
    "files": "#c2c2f0",
    "file_convos": "#c4e17f",
    "file_agents": "#c4e17f",
    "vectors": "#c4e17f",
    "analytics": "#8fd9b6"
}

# Add nodes with positions
positions = {
    "users": (0, 2),
    "roles": (2, 2),
    "perms": (4, 2),
    "role_perms": (6, 2),
    "agents": (8, 2),
    "ag_cfg": (10, 2),
    "ag_subs": (12, 2),
    "prompts": (14, 2),
    "models": (16, 2),
    "tools": (18, 2),
    "integrations": (20, 2),
    "convos": (2, 1),
    "msgs": (4, 1),
    "convo_grps": (6, 1),
    "grp_mems": (8, 1),
    "files": (0, 0),
    "file_convos": (2, 0),
    "file_agents": (4, 0),
    "vectors": (6, 0),
    "analytics": (8, 0)
}

for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Add edges to represent relationships
relationships = [
    ("users", "roles"),
    ("roles", "role_perms"),
    ("perms", "role_perms"),
    ("users", "agents"),
    ("agents", "ag_cfg"),
    ("users", "ag_subs"),
    ("agents", "ag_subs"),
    ("users", "prompts"),
    ("prompts", "convos"),
    ("models", "agents"),
    ("tools", "agents"),
    ("integrations", "agents"),
    ("convos", "msgs"),
    ("agents", "convos"),
    ("convos", "convo_grps"),
    ("convo_grps", "grp_mems"),
    ("users", "files"),
    ("files", "file_convos"),
    ("files", "file_agents"),
    ("files", "vectors"),
    ("convos", "analytics"),
    ("users", "analytics"),
    ("agents", "analytics"),
    ("msgs", "analytics")
]

for source, target in relationships:
    G.add_edge(source, target)

# Draw nodes
pos = nx.get_node_attributes(G, 'pos')
nx.draw_networkx_nodes(G, pos, node_size=5000, node_color=[colors[node] for node in G.nodes()], ax=ax)

# Draw labels within the circles
for node, (x, y) in pos.items():
    ax.text(x, y, node, color='black', ha='center', va='center', fontsize=9, fontweight='bold')

# Draw edges
nx.draw_networkx_edges(G, pos, edgelist=G.edges(), arrowstyle='-|>', arrowsize=20, edge_color='white', ax=ax)

# Hide axes
ax.axis('off')

# Save the figure
plt.savefig('./static/img/docs/architecture_schema_diagram.png', bbox_inches='tight', facecolor=fig.get_facecolor())

plt.show()
