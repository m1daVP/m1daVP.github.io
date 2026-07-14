---
title: Internal Learning Platform
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
  - Node.js
  - Express.js
  - NestJS
  - MongoDB
  - Anthropic API
  - AWS (ECS, ECR, EC2, CloudFront, S3)
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
---

## Overview

An interactive mobile learning platform built for a Gen Z audience, including a custom course builder and AI-powered content generation and validation workflows on the Anthropic API.

## Approach

- Led technical design and implementation across real-time, asynchronous, and AI-powered workflows.
- Built product features across frontend and backend services, including microservices for content processing and validation.
- Improved performance and responsiveness of key user flows.
- Led technical decisions, mentored engineers, and maintained production infrastructure with AWS, Docker, and CI/CD.

## Stack notes

Background jobs and async processing ran on Redis + BullMQ, backing the AI content pipeline (generation and validation via the Anthropic API). Infrastructure was built and maintained on AWS (ECS/ECR/EC2/CloudFront/S3), with GitHub Actions handling CI/CD and Jest covering the test suite.
