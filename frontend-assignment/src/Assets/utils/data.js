import GitLab from "../../Assets/Images/gitlab.png";
import GitHub from "../../Assets/Images/github-sign.png";
import Azure from "../../Assets/Images/azure.png";
import Sso from "../../Assets/Images/sso.png";
import Bitbucket from "../../Assets/Images/bitbucket.png";
export const sideMenu = [
  {
    id: 1,
    title: "Repositories",
    Icon: "Home",
  },
  {
    id: 2,
    title: "AI Code Review",
    Icon: "CodeXml",
  },
  {
    id: 3,
    title: "Cloud Security",
    Icon: "Cloud",
  },
  {
    id: 4,
    title: "How to Use",
    Icon: "BookText",
  },
  {
    id: 5,
    title: "Settings",
    Icon: "Settings",
  },
];

export const ReposList = [
  {
    id: 1,
    name: "design-system",
    description: "A comprehensive design system for our products",
    language: "React",
    visibility: "Public",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    id: 2,
    name: "codeant-ci-app",
    description: "Continuous Integration application for CodeAnt",
    language: "Javascript",
    visibility: "Private",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    id: 3,
    name: "analytics-dashboard",
    description: "Analytics dashboard for tracking metrics",
    language: "Python",
    visibility: "Private",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    id: 4,
    name: "mobile-app",
    description: "CodeAnt mobile application",
    language: "Swift",
    visibility: "Public",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    id: 5,
    name: "e-commerce-platform",
    description: "E-commerce platform backend",
    language: "Java",
    visibility: "Private",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
];

export const SAASLogin = [
  {
    id: 1,
    title: "Sign in with GitHub",
    image: GitHub,
  },
  {
    id: 2,
    title: "Sign in with Bitbucket",
    image: Bitbucket,
  },
  {
    id: 3,
    title: "Sign in with Azure Devops",
    image: Azure,
  },
  {
    id: 4,
    title: "Sign in with GitLab",
    image: GitLab,
  },
];

export const SelfLogin = [
  {
    id: 1,
    title: "Self Hosted GitLab",
    image: GitLab,
  },
  {
    id: 2,
    title: "Sign in with SSO",
    image: Sso,
  },
];
