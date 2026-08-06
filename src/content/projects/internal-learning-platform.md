---
title: Learning Platform for Gen Z
summary: Interactive mobile learning platform for Gen Z, with AI-powered content workflows.
role: Senior Full-Stack Engineer / Technical Lead
company: SkillStamp LLC
period: 2023 — 2025
tags:
  - Real-time & async workflows
  - AI-powered content pipeline
  - Technical leadership
techStack:
  - Vue.js
  - Vuex
  - Node.js
  - Express.js
  - NestJS
  - TypeScript
  - MongoDB
  - Redis
  - Bull
  - Anthropic API
  - OpenAI API
  - AWS
  - Jest
  - Docker
  - Redis
  - BullMQ
  - GitHub Actions
coverImage: ../../assets/images/projects/internal-learning-platform-cover.avif
coverIsPlaceholder: false
order: 2
draft: false
mappingConfirmed: true
slug: learning
---

## Overview

A full-stack course authoring platform for creating, managing, and delivering interactive learning experiences. The product combined a visual content editor, learner-facing runtime, AI-assisted content generation, media processing, and administrative tools for organizing courses and learning pathways.

## Approach

* Built the core authoring experience for interactive activities, learning screens, charts, simulations, formulas, media, and other structured content types.
* Implemented undo and redo history, offline editing, reconnection synchronization, unsaved-change protection, and embedded desktop and mobile previews.
* Developed backend APIs and data models for content validation, answer checking, learner progress, completion tracking, content migrations, and runtime formatting.
* Created visual administration tools for managing courses, learning paths, dependencies, and reusable content structures.
* Contributed substantially to a dedicated AI authoring service that generated and modified schema-compatible content rather than returning unstructured text.
* Added request preprocessing, selective content context, conversation history, document and image inputs, response normalization, and multi-step AI workflows.
* Moved long-running AI operations to asynchronous jobs with persistent status tracking, retries, backoff, and timeout handling.
* Built a media-processing workflow that validated uploaded files and normalized images and videos into controlled formats for reliable delivery.
* Strengthened authentication with managed sessions, access and refresh token rotation, revocation, expiry, and protected administrative endpoints.
* Supported automated testing, containerized environments, cloud deployment workflows, and operational tooling across the platform’s connected services.
* Coordinated a small development team and collaborated with an external designer, QA engineer, and mobile developer.
* Led technical decisions, mentored engineers, and maintained production infrastructure using AWS, Docker, and CI/CD.

## Outcome

The platform evolved from a set of administrative forms into a comprehensive authoring environment for interactive learning content. Authors gained safer editing workflows, offline resilience, reusable content types, integrated previews, and AI-assisted content creation.

The supporting services also became more production-ready through asynchronous AI processing, normalized media delivery, stronger session security, automated regression coverage, and repeatable deployment workflows.

## Stack notes

The authoring interface was built with Vue and Vuex, backed by Node.js, Express, and MongoDB services. A separate NestJS and TypeScript service handled structured AI-assisted content generation through LLM APIs, with Redis and Bull supporting asynchronous processing.

Uploaded media was validated and processed before cloud delivery, while Docker and AWS-based workflows supported the deployment of the main application, AI services, and related platform components.

*The company, educational subject matter, proprietary content structures, AI prompts, and internal business processes are confidential and have been generalized.*
