import matplotlib.pyplot as plt
import networkx as nx
import matplotlib.patches as patches

def calculate_positions(num_nodes, x_min, x_max, y_pos):
    positions = {}
    x_spacing = (x_max - x_min) / (num_nodes - 1)
    for i in range(num_nodes):
        positions[f"Node_{i}"] = (x_min + i * x_spacing, y_pos)
    return positions

# List of node names
node_names = ["User Mang", "Agent Mang", "Conversation Mang", "File Mang", "RAG Pipeline", "Integrations", "Analytics"]

# Define colors for different entity groupings
colors = {
    "User Mang": "#ff9999",
    "Agent Mang": "#ff6666",
    "Conversation Mang": "#66b3ff",
    "File Mang": "#6699ff",
    "RAG Pipeline": "#d9d9d9",
    "Integrations": "#8fd9b6",
    "Analytics": "#c2c2f0",
}

# Define endpoints for each grou[
endpoints = {
    "User Mang": [
        "CreateUser", "GetUser", "Login", "Logout", "RefreshToken",
        "ReqPassReset", "ResetPass", "CreateRole", "GetRole",
        "CreatePerm", "GetPerm", "RolePerms",
        "UserRoles", "RemoveUserRole"
    ],
    "Agent Mang": [
        "CreateAgent", "GetAgent", "AgentConfig",
        "AgentModels", "GetModel",
        "AgentTools", "GetTool",
        "AgentPrompts", "GetPrompt",
        "AgentSubs", "GetSub",
        "AgentPerms", "GetPerm",
        "AgentFiles", "GetFile"
    ],
    "Conversation Mang": [
        "CreateConv", "GetConv", "ConvMsgs",
        "GetMsg", "ConvHist",
        "ConvContext", "ConvGroup",
        "CreateGroup", "GetGroup"
    ],
    "File Mang": [
        "UploadFile", "GetFile", "FileMetadata"
    ],
    "RAG Pipeline": [
        "IngestFile", "FileVector",
        "UpdateVector", "FileEmbed",
        "UpdateEmbed", "SearchFiles"
    ],
    "Integrations": [
        "RegisterTool", "GetTool", "AgentTools",
        "GetAgentTool", "ExecTool"
    ],
    "Analytics": [
        "CaptureEvent", "GetEvent", "EventSummary",
        "AgentAnalytics", "UserAnalytics",
        "ConvAnalytics", "EventTypes",
        "GetEventType"
    ],
}

# Create a figure and axis
fig, ax = plt.subplots(figsize=(20, 8))
fig.patch.set_facecolor('black')
ax.set_facecolor('black')

# Hide axes
ax.axis('off')

# Set limits to add padding
ax.set_xlim(-22.5, 22.5)
ax.set_ylim(-6.5, 6.5)

# Define the graph
G = nx.DiGraph()

# Calculate positions for the nodes
positions = calculate_positions(len(node_names), -19, 19, 4)

# Assign correct node names to positions
positions = {node_names[i]: pos for i, pos in enumerate(positions.values())}

# Add main nodes
for node, pos in positions.items():
    G.add_node(node, pos=pos)

# Draw nodes
pos = nx.get_node_attributes(G, 'pos')
nx.draw_networkx_nodes(G, pos, node_size=10000, node_color=[colors[node.split('_')[0]] if '_' in node else colors[node] for node in G.nodes()], ax=ax)

# Draw labels within the circles
for node, (x, y) in pos.items():
    label = node.split('_')[0] if '_' in node else node
    ax.text(x, y, label, color='black', ha='center', va='center', fontsize=8, fontweight='bold')

# Draw group nodes (rectangles) underneath each main node
rect_height = 1.0
rect_y_offset = 2.9
line_offset = 2.1
for node, (x, y) in pos.items():
    endpoints_list = endpoints[node]
    rect_height = 0.5 + len(endpoints_list) * 0.35
    rect_width = 4
    rect = patches.FancyBboxPatch(
        (x - rect_width / 2, y - rect_y_offset - rect_height), rect_width, rect_height,
        boxstyle="round,pad=0.3", color=colors[node], lw=2, zorder=1)
    ax.add_patch(rect)
    ax.plot([x, x], [y - 3, y], color='white', lw=2, zorder=0)

    # Draw endpoints inside the rectangles
    for i, endpoint in enumerate(endpoints_list):
        ax.text(x, y - rect_y_offset - rect_height + 0.4 + i * 0.35, endpoint, color='black', ha='center', va='center', fontsize=8)

# Draw border around the image
# rect = plt.Rectangle((0, 0), 1, 1, transform=ax.transAxes, color='red', fill=False, lw=2)
# ax.add_patch(rect)

# Save the figure
plt.savefig('./static/img/docs/architecture_endpoints_diagram.png', bbox_inches='tight', facecolor=fig.get_facecolor())

plt.show()
