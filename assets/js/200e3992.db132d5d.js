"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[617],{3481:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(4848),r=i(8453);const t={id:"architecture",title:"Architecture"},d=void 0,c={id:"architecture",title:"Architecture",description:"Overview",source:"@site/private-docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/private/architecture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"defaultSidebar"},l={},o=[{value:"Overview",id:"overview",level:2},{value:"Core Features",id:"core-features",level:2},{value:"Database Schema",id:"database-schema",level:2},{value:"Entity Overview",id:"entity-overview",level:3},{value:"Entity Diagram",id:"entity-diagram",level:3},{value:"Entity Table",id:"entity-table",level:3},{value:"Entity Attributes",id:"entity-attributes",level:3},{value:"Users",id:"users",level:4},{value:"Agents",id:"agents",level:4},{value:"Agent Configs",id:"agent-configs",level:4},{value:"Agent Subscriptions",id:"agent-subscriptions",level:4},{value:"Prompts",id:"prompts",level:4},{value:"Models",id:"models",level:4},{value:"Tools",id:"tools",level:4},{value:"Conversations",id:"conversations",level:4},{value:"Messages",id:"messages",level:4},{value:"Conversation Groups",id:"conversation-groups",level:4},{value:"Conversation Group Memberships",id:"conversation-group-memberships",level:4},{value:"Files",id:"files",level:4},{value:"File Conversations",id:"file-conversations",level:4},{value:"File Agents",id:"file-agents",level:4},{value:"Vectors",id:"vectors",level:4},{value:"Analytics",id:"analytics",level:4}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:'The Jutsu "App Hub" architecture is designed to provide a comprehensive and dynamic platform for creating, managing, and interacting with AI agents and their associated contexts.'}),"\n",(0,s.jsx)(n.h2,{id:"core-features",children:"Core Features"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Coming soon..."})}),"\n",(0,s.jsx)(n.h2,{id:"database-schema",children:"Database Schema"}),"\n",(0,s.jsx)(n.h3,{id:"entity-overview",children:"Entity Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"users"}),": Central to the system, mapping all user interactions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agents"}),": Different agents that can be created and managed within the platform."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agent_configs"}),": Custom configuration details for agents, including frontend UX and other arbitrary key/value pairs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agent_subscriptions"}),": Manages user subscriptions to agents, tracking which users have access to which agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"prompts"}),": Stores reusable prompt engineering templates, linked to users and agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"models"}),": Stores model details, linked to agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tools"}),": Represents tools that agents can use, linked to agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversations"}),": Represents individual interactions between a user and an agent, linked to users and agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"messages"}),": Represents individual message exchanges within a conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversation_groups"}),": Groups of linked conversations that share a common memory and context, linked to agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversation_group_memberships"}),": Manages and organizes how conversations are linked together within conversation groups."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"files"}),": Manages multi-modal content, linked to users, conversations, and agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_conversations"}),": Links files to conversations, enabling files to be part of multiple conversation contexts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_agents"}),": Links files to agents, enabling files to be part of an agent's default knowledge base."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vectors"}),": Stores vectorized representations of files for efficient retrieval and use in the RAG (Retrieval-Augmented Generation) system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"analytics"}),": Captures events and usage data across the system to monitor interactions and performance."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"entity-diagram",children:"Entity Diagram"}),"\n",(0,s.jsx)(n.p,{children:"The below diagram indicates high-level entity relationships within the database schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entity Diagram",src:i(8637).A+"",width:"1570",height:"944"})}),"\n",(0,s.jsx)(n.h3,{id:"entity-table",children:"Entity Table"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Table Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Primary Key"}),(0,s.jsx)(n.th,{children:"Foreign Keys"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"users"}),(0,s.jsx)(n.td,{children:"Individuals who use the platform."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"user_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"plan_id"})," referencing ",(0,s.jsx)(n.code,{children:"price_plans"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"agents"}),(0,s.jsx)(n.td,{children:"Different agents that can be created and managed within the platform."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"agent_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"prompt_id"})," referencing ",(0,s.jsx)(n.code,{children:"prompts"}),", ",(0,s.jsx)(n.code,{children:"model_id"})," referencing ",(0,s.jsx)(n.code,{children:"models"}),", ",(0,s.jsx)(n.code,{children:"tool_ids"})," referencing ",(0,s.jsx)(n.code,{children:"tools"}),", ",(0,s.jsx)(n.code,{children:"vectors_id"})," referencing ",(0,s.jsx)(n.code,{children:"vectors"}),", ",(0,s.jsx)(n.code,{children:"agent_config_id"})," referencing ",(0,s.jsx)(n.code,{children:"agent_configs"}),", ",(0,s.jsx)(n.code,{children:"created_by"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"agent_configs"}),(0,s.jsx)(n.td,{children:"Custom configuration details for agents."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"agent_config_id"})}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"agent_subscriptions"}),(0,s.jsx)(n.td,{children:"Tracks which users are subscribed to which agents."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"subscription_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"user_id"})," referencing ",(0,s.jsx)(n.code,{children:"users"}),", ",(0,s.jsx)(n.code,{children:"agent_id"})," referencing ",(0,s.jsx)(n.code,{children:"agents"}),", ",(0,s.jsx)(n.code,{children:"invited_by"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prompts"}),(0,s.jsx)(n.td,{children:"Templates for conversations that should be had with the language model."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"prompt_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"user_id"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"models"}),(0,s.jsx)(n.td,{children:"Represents different AI models available for interaction within conversations."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"model_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"created_by"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tools"}),(0,s.jsx)(n.td,{children:"Represents tools that agents can use."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tool_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"created_by"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conversations"}),(0,s.jsx)(n.td,{children:"Instances of interactions between a user and an agent."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"conversation_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"user_id"})," referencing ",(0,s.jsx)(n.code,{children:"users"}),", ",(0,s.jsx)(n.code,{children:"agent_id"})," referencing ",(0,s.jsx)(n.code,{children:"agents"}),", ",(0,s.jsx)(n.code,{children:"prompt_id"})," referencing ",(0,s.jsx)(n.code,{children:"prompts"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messages"}),(0,s.jsx)(n.td,{children:"Individual message exchanges within a conversation."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"message_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," referencing ",(0,s.jsx)(n.code,{children:"conversations"}),", ",(0,s.jsx)(n.code,{children:"prompt_id"})," referencing ",(0,s.jsx)(n.code,{children:"prompts"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conversation_groups"}),(0,s.jsx)(n.td,{children:"Groups of linked conversations that share a common memory and context."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"group_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," referencing ",(0,s.jsx)(n.code,{children:"agents"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conversation_group_memberships"}),(0,s.jsx)(n.td,{children:"Manages and organizes how conversations are linked together."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"membership_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"group_id"})," referencing ",(0,s.jsx)(n.code,{children:"conversation_groups"}),", ",(0,s.jsx)(n.code,{children:"conversation_id"})," referencing ",(0,s.jsx)(n.code,{children:"conversations"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"files"}),(0,s.jsx)(n.td,{children:"Represents multi-modal context files that can be linked to conversations and agents."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"user_id"})," referencing ",(0,s.jsx)(n.code,{children:"users"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"file_conversations"}),(0,s.jsx)(n.td,{children:"Links files to conversations."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file_conversation_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"file_id"})," referencing ",(0,s.jsx)(n.code,{children:"files"}),", ",(0,s.jsx)(n.code,{children:"conversation_id"})," referencing ",(0,s.jsx)(n.code,{children:"conversations"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"file_agents"}),(0,s.jsx)(n.td,{children:"Links files to agents."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file_agent_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"file_id"})," referencing ",(0,s.jsx)(n.code,{children:"files"}),", ",(0,s.jsx)(n.code,{children:"agent_id"})," referencing ",(0,s.jsx)(n.code,{children:"agents"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vectors"}),(0,s.jsx)(n.td,{children:"Stores vectorized representations of files for efficient retrieval and use in the RAG system."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vector_id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"entity_id"})," referencing ",(0,s.jsx)(n.code,{children:"files"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"analytics"}),(0,s.jsx)(n.td,{children:"Captures events and usage data across the system."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," referencing ",(0,s.jsx)(n.code,{children:"conversations"}),", ",(0,s.jsx)(n.code,{children:"user_id"})," referencing ",(0,s.jsx)(n.code,{children:"users"}),", ",(0,s.jsx)(n.code,{children:"agent_id"})," referencing ",(0,s.jsx)(n.code,{children:"agents"}),", ",(0,s.jsx)(n.code,{children:"message_id"})," referencing ",(0,s.jsx)(n.code,{children:"messages"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"entity-attributes",children:"Entity Attributes"}),"\n",(0,s.jsx)(n.h4,{id:"users",children:"Users"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Individuals who use the platform, capable of creating, managing, and interacting with various agents."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"users"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Primary Key): Unique identifier for each user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"username"}),": The user's chosen display name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"email"}),": The user's email address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"password_hash"}),": Hashed representation of the user's password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plan_id"})," (Foreign Key referencing price_plans): The price plan associated with the user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the user account was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the user account."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"agents",children:"Agents"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Different agents that can be created and managed within the platform."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Primary Key): Unique identifier for each agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": The name of the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": A brief description of what the agent does."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": The type or category of the agent (e.g., chatbot, data retrieval)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt_id"})," (Foreign Key referencing prompts): The prompt template associated with the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model_id"})," (Foreign Key referencing models): The AI model used by the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tool_ids"})," (Foreign Key referencing tools): The tools that the agent can use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vectors_id"})," (Foreign Key referencing vectors): References to the default vector set associated with the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_config_id"})," (Foreign Key referencing agent_configs): References the configuration settings for the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_public"}),": Boolean indicating whether the agent is public or private."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_by"})," (Foreign Key referencing users): The user who created the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the agent was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the agent."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"agent-configs",children:"Agent Configs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Custom configuration details for agents, including frontend UX and other arbitrary key/value pairs."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agent_configs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_config_id"})," (Primary Key): Unique identifier for each agent configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"frontend_ux"}),": JSON or text representing the frontend user experience configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"meta_data"}),": JSON or text for storing arbitrary key/value pairs for additional configurations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the agent configuration was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the agent configuration."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"agent-subscriptions",children:"Agent Subscriptions"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Tracks which users are subscribed to which agents, managing access permissions and invitations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agent_subscriptions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscription_id"})," (Primary Key): Unique identifier for each subscription."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Foreign Key referencing users): The user who is subscribed to the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Foreign Key referencing agents): The agent to which the user is subscribed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"invited_by"})," (Foreign Key referencing users): The user who invited the subscriber, if applicable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_invited"}),": Boolean indicating if the subscription is by invitation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the subscription was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the subscription."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"prompts",children:"Prompts"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Templates for conversations that should be had with the language model, providing a starting point for interactions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"prompts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt_id"})," (Primary Key): Unique identifier for each prompt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Foreign Key referencing users): The user who created the prompt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title"}),": The title of the prompt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": A brief description of the prompt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt"}),": The actual text of the prompt template."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the prompt was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the prompt."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"models",children:"Models"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Represents different AI models available for interaction within conversations, such as GPT-4, Claude 3.5, etc."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"models"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model_id"})," (Primary Key): Unique identifier for each model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": The name of the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"provider"}),": The provider of the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api_key"}),": The API key used to access the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"}),": The version of the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": A brief description of the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_public"}),": Boolean indicating whether the model is public or private."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_by"})," (Foreign Key referencing users): The user who created the model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the model was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the model."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"tools",children:"Tools"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Represents tools that agents can use, enabling them to perform specific tasks or access external services."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tool_id"})," (Primary Key): Unique identifier for each tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": The name of the tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": A brief description of what the tool does."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," (internal/external): The type of tool (e.g., internal, external)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"})," (url): The source URL of the tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schema"}),": The schema of the tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_public"}),": Boolean indicating whether the tool is public or private."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_by"})," (Foreign Key referencing users): The user who created the tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the tool was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the tool."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"conversations",children:"Conversations"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Instances of interactions between a user and an agent, maintaining the context of the conversation."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Primary Key): Unique identifier for each conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Foreign Key referencing users): The user participating in the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Foreign Key referencing agents): The agent involved in the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt_id"})," (Foreign Key referencing prompts): The prompt template used in the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title"}),": The title of the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the conversation was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the conversation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"messages",children:"Messages"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Individual message exchanges within a conversation, representing the dialogue between a user and an agent."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"messages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message_id"})," (Primary Key): Unique identifier for each message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Foreign Key referencing conversations): The conversation this message belongs to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt_id"})," (Foreign Key referencing prompts): The prompt this message is part of."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"}),": The content of the message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"}),": The time when the message was sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," (user, assistant): The role of the message sender (e.g., user or assistant)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"conversation-groups",children:"Conversation Groups"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Groups of linked conversations that share a common memory and context, allowing the agent to access and use the collective history of multiple conversations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversation_groups"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"group_id"})," (Primary Key): Unique identifier for each conversation group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Foreign Key referencing agents): The agent managing the conversation group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": The name of the conversation group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": A brief description of the conversation group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the conversation group was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the conversation group."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"conversation-group-memberships",children:"Conversation Group Memberships"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Manages and organizes how conversations are linked together."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conversation_group_memberships"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"group_id"})," (Foreign Key referencing conversation_groups): The conversation group this membership belongs to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Foreign Key referencing conversations): The conversation linked to the group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"added_at"}),": Timestamp of when the conversation was added to the group."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"files",children:"Files"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Represents multi-modal context files that can be linked to conversations and agents, owned by specific users."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"files"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_id"})," (Primary Key): Unique identifier for each file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Foreign Key referencing users): The owner of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_name"}),": The name of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_type"}),": The type of the file (e.g., PDF, image, video, audio)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_url"}),": The URL where the file is stored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uploaded_at"}),": Timestamp of when the file was uploaded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"file-conversations",children:"File Conversations"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Links files to conversations, enabling files to be part of multiple conversation contexts."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_conversations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_conversation_id"})," (Primary Key): Unique identifier for each file-conversation link."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_id"})," (Foreign Key referencing files): The file being linked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Foreign Key referencing conversations): The conversation the file is linked to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"linked_at"}),": Timestamp of when the file was linked to the conversation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"file-agents",children:"File Agents"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Links files to agents, enabling files to be part of an agent's default knowledge base."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_agents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_agent_id"})," (Primary Key): Unique identifier for each file-agent link."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_id"})," (Foreign Key referencing files): The file being linked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Foreign Key referencing agents): The agent the file is linked to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"linked_at"}),": Timestamp of when the file was linked to the agent."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"vectors",children:"Vectors"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Stores vectorized representations of files for efficient retrieval and use in the RAG (Retrieval-Augmented Generation) system."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vectors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vector_id"})," (Primary Key): Unique identifier for each vector."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entity_id"})," (Foreign Key referencing files): The ID of the associated file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entity_type"})," (Constant Value 'file'): The type of the entity, which in this case is always 'file'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vector"}),": The vector representation of the file's content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"}),": The source of the data (e.g., user-uploaded, generated by agent)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_model"}),": The model used to generate the vector (e.g., GPT-4, BERT)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_version"}),": The version of the embedding model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_type"}),": The type of embedding (e.g., text, image, audio)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the vector was created."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated_at"}),": Timestamp of the last update to the vector."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"}),": The version of the vector representation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"analytics",children:"Analytics"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Definition"}),": Captures events and usage data across the system to monitor interactions and performance."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"analytics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," (Primary Key): Unique identifier for each analytics record."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Foreign Key referencing conversations): The conversation this record is associated with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user_id"})," (Foreign Key referencing users): The user involved in the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_id"})," (Foreign Key referencing agents): The agent involved in the conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message_id"})," (Foreign Key referencing messages): The specific message being analyzed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"})," (user, assistant): The role of the message sender."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"}),": The content of the message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input_token"}),": The number of input tokens used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output_token"}),": The number of output tokens generated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cost"}),": The cost associated with processing the message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"created_at"}),": Timestamp of when the analytics record was created."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8637:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/architecture_database_flowchart-ece72b63e281c04ace751689d31b26e0.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var s=i(6540);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);