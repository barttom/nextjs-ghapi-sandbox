import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export const octokitClient = octokit;
