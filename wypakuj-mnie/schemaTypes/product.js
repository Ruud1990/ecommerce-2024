import {defineField, defineType} from 'sanity'
export const product  = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField( {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    }),
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    defineField({ 
      name: 'details',
      title: 'Details',
      type: 'string',
    })
    ]
})