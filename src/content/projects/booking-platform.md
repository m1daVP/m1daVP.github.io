---
title: Ride Booking Platform
summary: Customer, partner, and operational workflows for a multi-application ride and private-transfer booking platform.
role: Senior Full-Stack Engineer
company: TaxiGo
period: 2024 — 2025
tags:
  - Multi-app platform
  - Booking workflows
  - Financial operations
techStack:
  - Nuxt
  - Vue.js
  - TypeScript
  - Tailwind CSS
  - Laravel
  - MySQL
  - Redis
  - Google Maps API
  - Docker
coverImage: ../../assets/images/projects/booking-platform-cover.avif
coverIsPlaceholder: false
order: 4
draft: false
mappingConfirmed: true
---

## Overview

A multi-application booking platform serving customers, commercial partners, and internal operations teams. The product covered ride and private-transfer booking, partner account management, payments, financial documents, and operational workflows.

## Approach

* Developed end-to-end features across the customer-facing application, partner workspace, internal administration tools, and backend services.
* Built booking, cart, checkout, and account-management workflows with clear separation between customer, partner, and administrative access.
* Designed a dedicated financial workspace for partners to review commissions, payouts, documents, exports, and payment settings.
* Implemented controlled internal workflows for reviewing and processing payouts, including permissions, status management, validation, and change history.
* Improved the reliability of payment and document-delivery processes by accounting for retries, duplicate operations, asynchronous processing, and partial failures.
* Contributed to automated testing, deployment configuration, data migration, and operational tooling.

## Outcome

Previously fragmented booking, financial, and operational processes were brought together into more structured workflows. Partners gained a clearer view of their activity, while internal teams received safer and more consistent tools for handling payments and related operations.

## Stack notes

The platform used separate Nuxt applications for public, partner, and administrative experiences, backed by a Laravel API and MySQL. Redis supported background and scheduled processes, while Google Maps APIs powered location-aware booking behavior. Docker was used to maintain consistent application environments.

*The project is under NDA, so operational details and some parts have been generalized.*
