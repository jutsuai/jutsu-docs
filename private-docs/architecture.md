---
id: architecture
title: Architecture
---

## Overview

The Jutsu architecture is designed to provide a comprehensive and dynamic platform for creating, managing, and interacting with AI agents and their associated contexts.

## Core Components

### Orchestration API

The Orchestration API serves as the central interface and business logic layer for interacting with and managing the database. It coordinates operations across different components of the system and consists of several subsystems:

#### User Management Subsystem
Handles all operations related to user accounts, roles, and permissions.

- Manages CRUD operations for users.
- Ensures proper authentication and authorization.
- Manages user roles and permissions.

#### Agent Management Subsystem
Provides comprehensive functionality for creating, configuring, and managing AI agents.

- Supports the definition of prompts.
- Manages the selection of models and linking of tools.
- Updates agent configurations.
- Manages agent subscriptions and permissions.

#### Conversation Management Subsystem
Handles the management of interactions between users and agents.

- Maintains conversation context.
- Stores and retrieves conversation history.
- Supports conversation grouping.
- Manages conversation workflows.

#### Analytics Subsystem
Captures events and usage data across the platform to monitor interactions and performance.

- Collects and stores analytics data.
- Provides reporting and insights.
- Supports monitoring and alerting based on defined metrics.

#### File Management Subsystem
Handles the storage and management of multi-modal content linked to conversations and agents.

- Manages file upload, storage, and retrieval.
- Links files to conversations and agents.
- Integrates with the RAG Pipeline for vectorizing file content.

### RAG Pipeline & API

The Retrieval-Augmented Generation (RAG) Pipeline and API handle all operations related to retrieval-augmented generation. This component integrates with vector databases and processes vectorized data to enhance the generation of AI responses.

- Manages the vectorized representations of data (files, conversations, etc.).
- Performs efficient retrieval operations to augment AI response generation.
- Integrates with embedding models to generate and update vector representations.
- Provides APIs for querying and managing vectors.

### Integrations API

The Integrations API serves as the interface and registry for tools, enabling agents to perform specific tasks or access external services.

- Manages the registry of available tools.
- Provides interfaces for agents to invoke and interact with tools.
- Handles the execution of tool operations and returns results to agents.
- Supports integration with external services and APIs.

## Database Schema Overview

### Entity Diagram

The below diagram indicates high-level entity relationships within the database schema.

![Entity Diagram](../static/img/docs/architecture_database_flowchart.png)

### Entity Reference

| Table Name                                                        | Description                                                                                   | Primary Key         | Foreign Keys                                                                                                       |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------|
| [users](#users)                                                   | Individuals who use the platform.                                                             | `user_id`           | `plan_id` referencing `price_plans`                                                                               |
| [user_roles](#user-roles)                                         | Defines different user roles within the platform.                                             | `role_id`           | -                                                                                                                 |
| [user_permissions](#user-permissions)                             | Defines different user permissions that can be assigned to roles.                             | `permission_id`     | -                                                                                                                 |
| [user_role_permissions](#user-role-permissions)                   | Links user roles to user permissions.                                                         
| [agents](#agents)                                                 | Different agents that can be created and managed within the platform.                         | `agent_id`          | `prompt_id` referencing `prompts`, `model_id` referencing `models`, `agent_config_id` referencing `agent_configs`, `created_by` referencing `users` |
| [agent_configs](#agent-configs)                                   | Custom configuration details for agents.                                                      | `agent_config_id`   | -                                                                                                                 |
| [agent_subscriptions](#agent-subscriptions)                       | Tracks which users are subscribed to which agents.                                            | `subscription_id`   | `user_id` referencing `users`, `agent_id` referencing `agents`, `invited_by` referencing `users`                 |
| [prompts](#prompts)                                               | Templates for conversations that should be had with the language model.                       | `prompt_id`         | `user_id` referencing `users`                                                                                     |
| [models](#models)                                                 | Represents different AI models available for interaction within conversations.                | `model_id`          | `created_by` referencing `users`                                                                                  |
| [tools](#tools)                                                   | Represents tools that agents can use.                                                         | `tool_id`           | `created_by` referencing `users`                                                                                  |
| [conversations](#conversations)                                   | Instances of interactions between a user and an agent.                                        | `conversation_id`   | `user_id` referencing `users`, `agent_id` referencing `agents`, `prompt_id` referencing `prompts`                |
| [messages](#messages)                                             | Individual message exchanges within a conversation.                                           | `message_id`        | `conversation_id` referencing `conversations`, `prompt_id` referencing `prompts`                                  |
| [conversation_groups](#conversation-groups)                       | Groups of linked conversations that share a common memory and context.                        | `group_id`          | `agent_id` referencing `agents`                                                                                   |
| [conversation_group_memberships](#conversation-group-memberships) | Manages and organizes how conversations are linked together.                                  | `membership_id`     | `group_id` referencing `conversation_groups`, `conversation_id` referencing `conversations`                      |
| [files](#files)                                                   | Represents multi-modal context files that can be linked to conversations and agents.          | `file_id`           | `user_id` referencing `users`                                                                                     |
| [file_conversations](#file-conversations)                         | Links files to conversations.                                                                 | `file_conversation_id` | `file_id` referencing `files`, `conversation_id` referencing `conversations`                                     |
| [file_agents](#file-agents)                                       | Links files to agents.                                                                        | `file_agent_id`     | `file_id` referencing `files`, `agent_id` referencing `agents`                                                   |
| [vectors](#vectors)                                               | Stores vectorized representations of files for efficient retrieval and use in the RAG system. | `vector_id`         | `entity_id` referencing `files`                                                                                   |
| [analytics](#analytics)                                           | Captures events and usage data across the system.                                             | `id`                | `conversation_id` referencing `conversations`, `user_id` referencing `users`, `agent_id` referencing `agents`, `message_id` referencing `messages` |

## Database Entity Definitions

### Users

**Definition**: Individuals who use the platform, capable of creating, managing, and interacting with various agents.

| Attribute        | Type       | Description                                                         |
|------------------|------------|---------------------------------------------------------------------|
| `user_id`        | Primary Key| Unique identifier for each user                                      |
| `username`       | String     | The user's chosen display name                                      |
| `email`          | String     | The user's email address                                            |
| `password_hash`  | String     | Hashed representation of the user's password                        |
| `plan_id`        | Foreign Key| The price plan associated with the user, references `price_plans`   |
| `created_at`     | Timestamp  | Timestamp of when the user account was created                      |
| `updated_at`     | Timestamp  | Timestamp of the last update to the user account                    |

---

### User Roles

**Definition**: Defines different user roles within the platform.

| Column Name | Type        | Description                              |
|-------------|-------------|------------------------------------------|
| `role_id`   | Primary Key | Unique identifier for each role.         |
| `name`      | String      | The name of the role.                    |
| `description` | String    | A brief description of the role.         |
| `created_at` | Timestamp  | Timestamp of when the role was created.  |
| `updated_at` | Timestamp  | Timestamp of the last update to the role.|

---

### User Permissions

**Definition**: Defines different user permissions that can be assigned to roles.

| Column Name   | Type        | Description                                  |
|---------------|-------------|----------------------------------------------|
| `permission_id` | Primary Key | Unique identifier for each permission.     |
| `name`        | String      | The name of the permission.                 |
| `description` | String      | A brief description of the permission.      |
| `created_at`  | Timestamp   | Timestamp of when the permission was created.|
| `updated_at`  | Timestamp   | Timestamp of the last update to the permission.|

---

### User Role Permissions

**Definition**: Links user roles to user permissions.

| Column Name           | Type        | Description                                      |
|-----------------------|-------------|--------------------------------------------------|
| `role_permission_id`  | Primary Key | Unique identifier for each role-permission link. |
| `role_id`             | Foreign Key | The role linked to the permission, references `roles`.   |
| `permission_id`       | Foreign Key | The permission linked to the role, references `permissions`. |
| `created_at`          | Timestamp   | Timestamp of when the role-permission link was created. |

---

### Agents

**Definition**: Different agents that can be created and managed within the platform.

| Attribute           | Type       | Description                                                                             |
|---------------------|------------|-----------------------------------------------------------------------------------------|
| `agent_id`          | Primary Key| Unique identifier for each agent                                                        |
| `name`              | String     | The name of the agent                                                                   |
| `description`       | String     | A brief description of what the agent does                                              |
| `type`              | String     | The type or category of the agent (e.g., chatbot, data retrieval)                       |
| `prompt_id`         | Foreign Key| The prompt template associated with the agent, references `prompts`                     |
| `model_id`          | Foreign Key| The AI model used by the agent, references `models`                                     |
| `tool_ids`          | Foreign Key| The tools that the agent can use, references `tools`                                    |
| `vectors_id`        | Foreign Key| References to the default vector set associated with the agent, references `vectors`    |
| `agent_config_id`   | Foreign Key| References the configuration settings for the agent, references `agent_configs`         |
| `is_public`         | Boolean    | Boolean indicating whether the agent is public or private                               |
| `created_by`        | Foreign Key| The user who created the agent, references `users`                                      |
| `created_at`        | Timestamp  | Timestamp of when the agent was created                                                 |
| `updated_at`        | Timestamp  | Timestamp of the last update to the agent                                               |

---

### Agent Configs

**Definition**: Custom configuration details for agents, including frontend UX and other arbitrary key/value pairs.

| Attribute        | Type       | Description                                                     |
|------------------|------------|-----------------------------------------------------------------|
| `agent_config_id`| Primary Key| Unique identifier for each agent configuration                  |
| `frontend_ux`    | JSON/Text  | JSON or text representing the frontend user experience configuration |
| `meta_data`      | JSON/Text  | JSON or text for storing arbitrary key/value pairs for additional configurations |
| `created_at`     | Timestamp  | Timestamp of when the agent configuration was created           |
| `updated_at`     | Timestamp  | Timestamp of the last update to the agent configuration         |

---

### Agent Subscriptions

**Definition**: Tracks which users are subscribed to which agents, managing access permissions and invitations.

| Attribute       | Type       | Description                                                        |
|-----------------|------------|--------------------------------------------------------------------|
| `subscription_id`| Primary Key| Unique identifier for each subscription                           |
| `user_id`       | Foreign Key| The user who is subscribed to the agent, references `users`        |
| `agent_id`      | Foreign Key| The agent to which the user is subscribed, references `agents`     |
| `invited_by`    | Foreign Key| The user who invited the subscriber, if applicable, references `users` |
| `is_invited`    | Boolean    | Boolean indicating if the subscription is by invitation            |
| `created_at`    | Timestamp  | Timestamp of when the subscription was created                     |
| `updated_at`    | Timestamp  | Timestamp of the last update to the subscription                   |

---

### Prompts

**Definition**: Templates for conversations that should be had with the language model, providing a starting point for interactions.

| Attribute      | Type       | Description                                                         |
|----------------|------------|---------------------------------------------------------------------|
| `prompt_id`    | Primary Key| Unique identifier for each prompt                                    |
| `user_id`      | Foreign Key| The user who created the prompt, references `users`                  |
| `title`        | String     | The title of the prompt                                             |
| `description`  | String     | A brief description of the prompt                                    |
| `prompt`       | Text       | The actual text of the prompt template                               |
| `created_at`   | Timestamp  | Timestamp of when the prompt was created                             |
| `updated_at`   | Timestamp  | Timestamp of the last update to the prompt                           |

---

### Models

**Definition**: Represents different AI models available for interaction within conversations, such as GPT-4, Claude 3.5, etc.

| Attribute       | Type       | Description                                                         |
|-----------------|------------|---------------------------------------------------------------------|
| `model_id`      | Primary Key| Unique identifier for each model                                    |
| `name`          | String     | The name of the model                                               |
| `provider`      | String     | The provider of the model                                           |
| `api_key`       | String     | The API key used to access the model                                |
| `version`       | String     | The version of the model                                            |
| `description`   | String     | A brief description of the model                                    |
| `is_public`     | Boolean    | Boolean indicating whether the model is public or private           |
| `created_by`    | Foreign Key| The user who created the model, references `users`                  |
| `created_at`    | Timestamp  | Timestamp of when the model was created                             |
| `updated_at`    | Timestamp  | Timestamp of the last update to the model                           |

---

### Tools

**Definition**: Represents tools that agents can use, enabling them to perform specific tasks or access external services.

| Attribute       | Type       | Description                                                         |
|-----------------|------------|---------------------------------------------------------------------|
| `tool_id`       | Primary Key| Unique identifier for each tool                                     |
| `name`          | String     | The name of the tool                                                |
| `description`   | String     | A brief description of what the tool does                           |
| `type`          | String     | The type of tool (e.g., internal, external)                         |
| `source`        | String     | The source URL of the tool                                          |
| `schema`        | Text       | The schema of the tool                                              |
| `is_public`     | Boolean    | Boolean indicating whether the tool is public or private            |
| `created_by`    | Foreign Key| The user who created the tool, references `users`                   |
| `created_at`    | Timestamp  | Timestamp of when the tool was created                              |
| `updated_at`    | Timestamp  | Timestamp of the last update to the tool                            |

---


### Conversations

**Definition**: Instances of interactions between a user and an agent, maintaining the context of the conversation.

| Attribute          | Type       | Description                                                         |
|--------------------|------------|---------------------------------------------------------------------|
| `conversation_id`  | Primary Key| Unique identifier for each conversation                             |
| `user_id`          | Foreign Key| The user participating in the conversation, references `users`      |
| `agent_id`         | Foreign Key| The agent involved in the conversation, references `agents`         |
| `prompt_id`        | Foreign Key| The prompt template used in the conversation, references `prompts`  |
| `title`            | String     | The title of the conversation                                       |
| `created_at`       | Timestamp  | Timestamp of when the conversation was created                      |
| `updated_at`       | Timestamp  | Timestamp of the last update to the conversation                    |

---

### Messages

**Definition**: Individual message exchanges within a conversation, representing the dialogue between a user and an agent.

| Attribute        | Type       | Description                                                         |
|------------------|------------|---------------------------------------------------------------------|
| `message_id`     | Primary Key| Unique identifier for each message                                  |
| `conversation_id`| Foreign Key| The conversation this message belongs to, references `conversations`|
| `prompt_id`      | Foreign Key| The prompt this message is part of, references `prompts`            |
| `content`        | Text       | The content of the message                                          |
| `timestamp`      | Timestamp  | The time when the message was sent                                  |
| `role`           | String     | The role of the message sender (e.g., user, assistant)              |

---

### Conversation Groups

**Definition**: Groups of linked conversations that share a common memory and context, allowing the agent to access and use the collective history of multiple conversations.

| Attribute     | Type       | Description                                                        |
|---------------|------------|--------------------------------------------------------------------|
| `group_id`    | Primary Key| Unique identifier for each conversation group                      |
| `agent_id`    | Foreign Key| The agent managing the conversation group, references `agents`     |
| `name`        | String     | The name of the conversation group                                 |
| `description` | String     | A brief description of the conversation group                      |
| `created_at`  | Timestamp  | Timestamp of when the conversation group was created               |
| `updated_at`  | Timestamp  | Timestamp of the last update to the conversation group             |

---

### Conversation Group Memberships

**Definition**: Manages and organizes how conversations are linked together within conversation groups.

| Attribute        | Type         | Description                                                              |
|------------------|--------------|--------------------------------------------------------------------------|
| `group_id`       | Foreign Key  | The conversation group this membership belongs to, references `conversation_groups` |
| `conversation_id`| Foreign Key  | The conversation linked to the group, references `conversations`         |
| `added_at`       | Timestamp    | Timestamp of when the conversation was added to the group                |

---

### Files

**Definition**: Represents multi-modal context files that can be linked to conversations and agents, owned by specific users.

| Attribute        | Type         | Description                                                              |
|------------------|--------------|--------------------------------------------------------------------------|
| `file_id`        | Primary Key  | Unique identifier for each file                                          |
| `user_id`        | Foreign Key  | The owner of the file, references `users`                                |
| `file_name`      | String       | The name of the file                                                     |
| `file_type`      | String       | The type of the file (e.g., PDF, image, video, audio)                    |
| `file_url`       | String       | The URL where the file is stored                                         |
| `uploaded_at`    | Timestamp    | Timestamp of when the file was uploaded                                  |
| `updated_at`     | Timestamp    | Timestamp of the last update to the file                                 |

---

### File Conversations

**Definition**: Links files to conversations, enabling files to be part of multiple conversation contexts.

| Attribute             | Type         | Description                                                              |
|-----------------------|--------------|--------------------------------------------------------------------------|
| `file_conversation_id`| Primary Key  | Unique identifier for each file-conversation link                        |
| `file_id`             | Foreign Key  | The file being linked, references `files`                                |
| `conversation_id`     | Foreign Key  | The conversation the file is linked to, references `conversations`       |
| `linked_at`           | Timestamp    | Timestamp of when the file was linked to the conversation                |

---

### File Agents

**Definition**: Links files to agents, enabling files to be part of an agent's default knowledge base.

| Attribute        | Type         | Description                                                              |
|------------------|--------------|--------------------------------------------------------------------------|
| `file_agent_id`  | Primary Key  | Unique identifier for each file-agent link                               |
| `file_id`        | Foreign Key  | The file being linked, references `files`                                |
| `agent_id`       | Foreign Key  | The agent the file is linked to, references `agents`                     |
| `linked_at`      | Timestamp    | Timestamp of when the file was linked to the agent                       |

---

### Vectors

**Definition**: Stores vectorized representations of files for efficient retrieval and use in the RAG (Retrieval-Augmented Generation) system.

| Attribute         | Type         | Description                                                              |
|-------------------|--------------|--------------------------------------------------------------------------|
| `vector_id`       | Primary Key  | Unique identifier for each vector                                        |
| `entity_id`       | Foreign Key  | The ID of the associated file, references `files`                        |
| `entity_type`     | Constant     | The type of the entity, which in this case is always 'file'              |
| `vector`          | Array        | The vector representation of the file's content                          |
| `source`          | String       | The source of the data (e.g., user-uploaded, generated by agent)         |
| `embedding_model` | String       | The model used to generate the vector (e.g., GPT-4, BERT)                |
| `embedding_version`| String      | The version of the embedding model                                       |
| `embedding_type`  | String       | The type of embedding (e.g., text, image, audio)                         |
| `created_at`      | Timestamp    | Timestamp of when the vector was created                                 |
| `updated_at`      | Timestamp    | Timestamp of the last update to the vector                               |
| `version`         | String       | The version of the vector representation                                 |

---

### Analytics

**Definition**: Captures events and usage data across the system to monitor interactions and performance.

| Attribute         | Type         | Description                                                              |
|-------------------|--------------|--------------------------------------------------------------------------|
| `id`              | Primary Key  | Unique identifier for each analytics record                              |
| `conversation_id` | Foreign Key  | The conversation this record is associated with, references `conversations` |
| `user_id`         | Foreign Key  | The user involved in the conversation, references `users`                |
| `agent_id`        | Foreign Key  | The agent involved in the conversation, references `agents`              |
| `message_id`      | Foreign Key  | The specific message being analyzed, references `messages`               |
| `role`            | String       | The role of the message sender (e.g., user, assistant)                   |
| `content`         | Text         | The content of the message                                               |
| `input_token`     | Integer      | The number of input tokens used                                          |
| `output_token`    | Integer      | The number of output tokens generated                                    |
| `cost`            | Float        | The cost associated with processing the message                          |
| `created_at`      | Timestamp    | Timestamp of when the analytics record was created                       |

---
