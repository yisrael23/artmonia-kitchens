import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'כותבים',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'תמונה',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'ביוגרפיה',
      type: 'text',
      rows: 3,
    }),
  ],
})
