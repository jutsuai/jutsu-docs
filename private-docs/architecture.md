---
id: architecture
title: Architecture
---

## Overview

The Jutsu "App Hub" architecture is designed to provide a comprehensive and dynamic platform for creating, managing, and interacting with AI agents and their associated contexts. 


## Core Features

_Coming soon..._

## Database Schema

### Entity Overview

- **users**: Central to the system, mapping all user interactions.
- **agents**: Different agents that can be created and managed within the platform.
- **agent_configs**: Custom configuration details for agents, including frontend UX and other arbitrary key/value pairs.
- **agent_subscriptions**: Manages user subscriptions to agents, tracking which users have access to which agents.
- **prompts**: Stores reusable prompt engineering templates, linked to users and agents.
- **models**: Stores model details, linked to agents.
- **tools**: Represents tools that agents can use, linked to agents.
- **conversations**: Represents individual interactions between a user and an agent, linked to users and agents.
- **messages**: Represents individual message exchanges within a conversation.
- **conversation_groups**: Groups of linked conversations that share a common memory and context, linked to agents.
- **conversation_group_memberships**: Manages and organizes how conversations are linked together within conversation groups.
- **files**: Manages multi-modal content, linked to users, conversations, and agents.
- **file_conversations**: Links files to conversations, enabling files to be part of multiple conversation contexts.
- **file_agents**: Links files to agents, enabling files to be part of an agent's default knowledge base.
- **vectors**: Stores vectorized representations of files for efficient retrieval and use in the RAG (Retrieval-Augmented Generation) system.
- **analytics**: Captures events and usage data across the system to monitor interactions and performance.

### Entity Diagram

The below diagram indicates high-level entity relationships within the database schema.

![Entity Diagram](../static/img/docs/architecture_database_flowchart.png)

### Entity Table

### Entity Table

| Table Name               | Description                                                                                     | Primary Key         | Foreign Keys                                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------|
| users                    | Individuals who use the platform.                                                               | `user_id`           | `plan_id` referencing `price_plans`                                                                               |
| agents                   | Different agents that can be created and managed within the platform.                           | `agent_id`          | `prompt_id` referencing `prompts`, `model_id` referencing `models`, `tool_ids` referencing `tools`, `vectors_id` referencing `vectors`, `agent_config_id` referencing `agent_configs`, `created_by` referencing `users` |
| agent_configs            | Custom configuration details for agents.                                                        | `agent_config_id`   | -                                                                                                                 |
| agent_subscriptions      | Tracks which users are subscribed to which agents.                                               | `subscription_id`   | `user_id` referencing `users`, `agent_id` referencing `agents`, `invited_by` referencing `users`                 |
| prompts                  | Templates for conversations that should be had with the language model.                         | `prompt_id`         | `user_id` referencing `users`                                                                                     |
| models                   | Represents different AI models available for interaction within conversations.                  | `model_id`          | `created_by` referencing `users`                                                                                  |
| tools                    | Represents tools that agents can use.                                                           | `tool_id`           | `created_by` referencing `users`                                                                                  |
| conversations            | Instances of interactions between a user and an agent.                                          | `conversation_id`   | `user_id` referencing `users`, `agent_id` referencing `agents`, `prompt_id` referencing `prompts`                |
| messages                 | Individual message exchanges within a conversation.                                             | `message_id`        | `conversation_id` referencing `conversations`, `prompt_id` referencing `prompts`                                  |
| conversation_groups      | Groups of linked conversations that share a common memory and context.                          | `group_id`          | `agent_id` referencing `agents`                                                                                   |
| conversation_group_memberships | Manages and organizes how conversations are linked together.                               | `membership_id`     | `group_id` referencing `conversation_groups`, `conversation_id` referencing `conversations`                      |
| files                    | Represents multi-modal context files that can be linked to conversations and agents.            | `file_id`           | `user_id` referencing `users`                                                                                     |
| file_conversations       | Links files to conversations.                                                                   | `file_conversation_id` | `file_id` referencing `files`, `conversation_id` referencing `conversations`                                     |
| file_agents              | Links files to agents.                                                                          | `file_agent_id`     | `file_id` referencing `files`, `agent_id` referencing `agents`                                                   |
| vectors                  | Stores vectorized representations of files for efficient retrieval and use in the RAG system.   | `vector_id`         | `entity_id` referencing `files`                                                                                   |
| analytics                | Captures events and usage data across the system.                                               | `id`                | `conversation_id` referencing `conversations`, `user_id` referencing `users`, `agent_id` referencing `agents`, `message_id` referencing `messages` |

### Entity Attributes

#### Users
**Definition**: Individuals who use the platform, capable of creating, managing, and interacting with various agents.

- **users**
  - `user_id` (Primary Key): Unique identifier for each user.
  - `username`: The user's chosen display name.
  - `email`: The user's email address.
  - `password_hash`: Hashed representation of the user's password.
  - `plan_id` (Foreign Key referencing price_plans): The price plan associated with the user.
  - `created_at`: Timestamp of when the user account was created.
  - `updated_at`: Timestamp of the last update to the user account.

#### Agents
**Definition**: Different agents that can be created and managed within the platform.

- **agents**
  - `agent_id` (Primary Key): Unique identifier for each agent.
  - `name`: The name of the agent.
  - `description`: A brief description of what the agent does.
  - `type`: The type or category of the agent (e.g., chatbot, data retrieval).
  - `prompt_id` (Foreign Key referencing prompts): The prompt template associated with the agent.
  - `model_id` (Foreign Key referencing models): The AI model used by the agent.
  - `tool_ids` (Foreign Key referencing tools): The tools that the agent can use.
  - `vectors_id` (Foreign Key referencing vectors): References to the default vector set associated with the agent.
  - `agent_config_id` (Foreign Key referencing agent_configs): References the configuration settings for the agent.
  - `is_public`: Boolean indicating whether the agent is public or private.
  - `created_by` (Foreign Key referencing users): The user who created the agent.
  - `created_at`: Timestamp of when the agent was created.
  - `updated_at`: Timestamp of the last update to the agent.

#### Agent Configs

**Definition**: Custom configuration details for agents, including frontend UX and other arbitrary key/value pairs.

- **agent_configs**
  - `agent_config_id` (Primary Key): Unique identifier for each agent configuration.
  - `frontend_ux`: JSON or text representing the frontend user experience configuration.
  - `meta_data`: JSON or text for storing arbitrary key/value pairs for additional configurations.
  - `created_at`: Timestamp of when the agent configuration was created.
  - `updated_at`: Timestamp of the last update to the agent configuration.

#### Agent Subscriptions
**Definition**: Tracks which users are subscribed to which agents, managing access permissions and invitations.

- **agent_subscriptions**
  - `subscription_id` (Primary Key): Unique identifier for each subscription.
  - `user_id` (Foreign Key referencing users): The user who is subscribed to the agent.
  - `agent_id` (Foreign Key referencing agents): The agent to which the user is subscribed.
  - `invited_by` (Foreign Key referencing users): The user who invited the subscriber, if applicable.
  - `is_invited`: Boolean indicating if the subscription is by invitation.
  - `created_at`: Timestamp of when the subscription was created.
  - `updated_at`: Timestamp of the last update to the subscription.

#### Prompts
**Definition**: Templates for conversations that should be had with the language model, providing a starting point for interactions.

- **prompts**
  - `prompt_id` (Primary Key): Unique identifier for each prompt.
  - `user_id` (Foreign Key referencing users): The user who created the prompt.
  - `title`: The title of the prompt.
  - `description`: A brief description of the prompt.
  - `prompt`: The actual text of the prompt template.
  - `created_at`: Timestamp of when the prompt was created.
  - `updated_at`: Timestamp of the last update to the prompt.

#### Models
**Definition**: Represents different AI models available for interaction within conversations, such as GPT-4, Claude 3.5, etc.

- **models**
  - `model_id` (Primary Key): Unique identifier for each model.
  - `name`: The name of the model.
  - `provider`: The provider of the model.
  - `api_key`: The API key used to access the model.
  - `version`: The version of the model.
  - `description`: A brief description of the model.
  - `is_public`: Boolean indicating whether the model is public or private.
  - `created_by` (Foreign Key referencing users): The user who created the model.
  - `created_at`: Timestamp of when the model was created.
  - `updated_at`: Timestamp of the last update to the model.

#### Tools
**Definition**: Represents tools that agents can use, enabling them to perform specific tasks or access external services.

- **tools**
  - `tool_id` (Primary Key): Unique identifier for each tool.
  - `name`: The name of the tool.
  - `description`: A brief description of what the tool does.
  - `type` (internal/external): The type of tool (e.g., internal, external).
  - `source` (url): The source URL of the tool.
  - `schema`: The schema of the tool.
  - `is_public`: Boolean indicating whether the tool is public or private.
  - `created_by` (Foreign Key referencing users): The user who created the tool.
  - `created_at`: Timestamp of when the tool was created.
  - `updated_at`: Timestamp of the last update to the tool.

#### Conversations
**Definition**: Instances of interactions between a user and an agent, maintaining the context of the conversation.

- **conversations**
  - `conversation_id` (Primary Key): Unique identifier for each conversation.
  - `user_id` (Foreign Key referencing users): The user participating in the conversation.
  - `agent_id` (Foreign Key referencing agents): The agent involved in the conversation.
  - `prompt_id` (Foreign Key referencing prompts): The prompt template used in the conversation.
  - `title`: The title of the conversation.
  - `created_at`: Timestamp of when the conversation was created.
  - `updated_at`: Timestamp of the last update to the conversation.

#### Messages
**Definition**: Individual message exchanges within a conversation, representing the dialogue between a user and an agent.

- **messages**
  - `message_id` (Primary Key): Unique identifier for each message.
  - `conversation_id` (Foreign Key referencing conversations): The conversation this message belongs to.
  - `prompt_id` (Foreign Key referencing prompts): The prompt this message is part of.
  - `content`: The content of the message.
  - `timestamp`: The time when the message was sent.
  - `role` (user, assistant): The role of the message sender (e.g., user or assistant).

#### Conversation Groups
**Definition**: Groups of linked conversations that share a common memory and context, allowing the agent to access and use the collective history of multiple conversations.

- **conversation_groups**
  - `group_id` (Primary Key): Unique identifier for each conversation group.
  - `agent_id` (Foreign Key referencing agents): The agent managing the conversation group.
  - `name`: The name of the conversation group.
  - `description`: A brief description of the conversation group.
  - `created_at`: Timestamp of when the conversation group was created.
  - `updated_at`: Timestamp of the last update to the conversation group.

#### Conversation Group Memberships
**Definition**: Manages and organizes how conversations are linked together.

- **conversation_group_memberships**
  - `group_id` (Foreign Key referencing conversation_groups): The conversation group this membership belongs to.
  - `conversation_id` (Foreign Key referencing conversations): The conversation linked to the group.
  - `added_at`: Timestamp of when the conversation was added to the group.

#### Files
**Definition**: Represents multi-modal context files that can be linked to conversations and agents, owned by specific users.

- **files**
  - `file_id` (Primary Key): Unique identifier for each file.
  - `user_id` (Foreign Key referencing users): The owner of the file.
  - `file_name`: The name of the file.
  - `file_type`: The type of the file (e.g., PDF, image, video, audio).
  - `file_url`: The URL where the file is stored.
  - `uploaded_at`: Timestamp of when the file was uploaded.
  - `updated_at`: Timestamp of the last update to the file.

#### File Conversations
**Definition**: Links files to conversations, enabling files to be part of multiple conversation contexts.

- **file_conversations**
  - `file_conversation_id` (Primary Key): Unique identifier for each file-conversation link.
  - `file_id` (Foreign Key referencing files): The file being linked.
  - `conversation_id` (Foreign Key referencing conversations): The conversation the file is linked to.
  - `linked_at`: Timestamp of when the file was linked to the conversation.

#### File Agents
**Definition**: Links files to agents, enabling files to be part of an agent's default knowledge base.

- **file_agents**
  - `file_agent_id` (Primary Key): Unique identifier for each file-agent link.
  - `file_id` (Foreign Key referencing files): The file being linked.
  - `agent_id` (Foreign Key referencing agents): The agent the file is linked to.
  - `linked_at`: Timestamp of when the file was linked to the agent.

#### Vectors
**Definition**: Stores vectorized representations of files for efficient retrieval and use in the RAG (Retrieval-Augmented Generation) system.

- **vectors**
  - `vector_id` (Primary Key): Unique identifier for each vector.
  - `entity_id` (Foreign Key referencing files): The ID of the associated file.
  - `entity_type` (Constant Value 'file'): The type of the entity, which in this case is always 'file'.
  - `vector`: The vector representation of the file's content.
  - `source`: The source of the data (e.g., user-uploaded, generated by agent).
  - `embedding_model`: The model used to generate the vector (e.g., GPT-4, BERT).
  - `embedding_version`: The version of the embedding model.
  - `embedding_type`: The type of embedding (e.g., text, image, audio).
  - `created_at`: Timestamp of when the vector was created.
  - `updated_at`: Timestamp of the last update to the vector.
  - `version`: The version of the vector representation.

#### Analytics
**Definition**: Captures events and usage data across the system to monitor interactions and performance.

- **analytics**
  - `id` (Primary Key): Unique identifier for each analytics record.
  - `conversation_id` (Foreign Key referencing conversations): The conversation this record is associated with.
  - `user_id` (Foreign Key referencing users): The user involved in the conversation.
  - `agent_id` (Foreign Key referencing agents): The agent involved in the conversation.
  - `message_id` (Foreign Key referencing messages): The specific message being analyzed.
  - `role` (user, assistant): The role of the message sender.
  - `content`: The content of the message.
  - `input_token`: The number of input tokens used.
  - `output_token`: The number of output tokens generated.
  - `cost`: The cost associated with processing the message.
  - `created_at`: Timestamp of when the analytics record was created.