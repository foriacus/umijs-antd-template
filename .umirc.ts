import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  dva: {
    immer: true,
    hmr: false,
  },
  webpack5: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  routes: [
    {
      path: '/window',
      component: '@/layouts/WindowLayout',
      routes: [
        {
          path: 'demo',
          component: '@/pages/index',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
        }
      ]
    },
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { exact: true, path: '/', redirect: '/a' },
        {
          path: 'a',
          component: '@/pages/index',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
          routes: [
            { exact: true, path: '/b', redirect: '/b/c' },
            {
              path: 'c',
              component: '@/pages/index',
              name: '二级菜单',
              title: '二级菜单',
            },
          ],
        },
      ],
    },
  ],
  define: {
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://mock.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {},
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  }
});
