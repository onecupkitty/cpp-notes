import { defineConfig } from 'vitepress'

export default defineConfig({

  lang: 'zh-CN',

  title: 'C++ Note',

  description: '从入门到竞赛的 C++ 学习笔记',

  cleanUrls: true,

  lastUpdated: true,

  themeConfig: {

  nav: [

    {
      text: '首页',
      link: '/'
    },

    {
      text: 'C++',
      link: '/cpp/'
    },

    {
      text: 'STL',
      link: '/stl/'
    },

    {
      text: '算法',
      link: '/algorithm/'
    },

    {
      text: 'GESP',
      link: '/gesp/'
    },

    {
      text: 'CSP-J',
      link: '/csp-j/'
    },

    {
      text: 'Cheat Sheet',
      link: '/cheatsheet/'
    }

  ],
  socialLinks: [

    {
        icon: 'github',
        link: 'https://github.com/onecupkitty/cpp-notes'
    }

]

}

})