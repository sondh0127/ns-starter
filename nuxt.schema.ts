// nuxt.schema.ts
// authors: [
//   {
//     name: 'Ant',
//     title: 'Creator',
//     avatar: 'https://unavatar.io/antfu',
//   },
//   {
//     name: 'Two',
//     title: 'SE',
//     avatar: 'https://unavatar.io/antfu',
//   }
// ]

import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    header: group({
      title: 'Header',
      description: 'Header configuration',
      icon: 'i-mdi-page-layout-header',
      fields: {
        title: field({
          type: 'string',
          title: 'Header',
          description: 'Header title to display if no icon is provided',
          icon: 'i-mdi-format-title'
        }),
        icon: field({
          type: 'icon',
          title: 'Icon',
          description: 'Header icon',
          icon: 'i-mdi-image-filter-center-focus-strong-outline'
        })
      }
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        display: field({
          type: 'boolean',
          title: 'Display',
          description: 'Hide or display the footer',
          icon: 'i-mdi-page-layout-footer'
        })
      }
    }),
    socials: group({
      title: 'Socials',
      description: 'Social links',
      icon: 'i-mdi-web',
      fields: {
        twitter: field({
          type: 'string',
          title: 'Twitter',
          description: 'Twitter social handle',
          icon: 'i-mdi-twitter'
        }),
        github: field({
          type: 'string',
          description: 'Github social handle',
          icon: 'i-mdi-github'
        })
      }
    }),
    docsLink: field({
      type:'string',
      title: 'Documents link',
      description: 'Link to the documentation',
      icon: 'i-mdi-book-open-page-variant'
    }),
    authors: field({
      type: 'array',
      title: 'Authors',
      description: 'List of authors',
      icon: 'i-mdi-account-group',
      items: {
        type: 'object',
        fields: {
          slug: field({
            type:'string',
            title: 'Slug',
            description: 'Author slug',
            icon: 'i-mdi-account'
          }),
          name: field({
            type:'string',
            title: 'Name',
            description: 'Author name',
            icon: 'i-mdi-account'
          }),
          title: field({
            type:'string',
            title: 'Title',
            description: 'Author title',
            icon: 'i-mdi-account-star'
          }),
          avatar: field({
            type:'string',
            title: 'Avatar',
            description: 'Avatar URL',
            icon: 'i-mdi-account-circle'
          })
        }
      }
    })
  }
})
