import { defineField } from "sanity";

const roomTypes = [
    {title:"Basic", value:"basic"},
    {title:"Luxury", value:"luxury"},
    {title:"Suite", value:"suite"}
]

const hotelRoom = {
    name:"hotelRoom",
    title:"Hotel Room",
    type:"document",
    fields: [
        defineField({
            name:"name",
            title:"Name",
            type:"string",
            validation:Rule => Rule.required().max(50).error("Maksimum 50 karakter")
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:"name"
            },
            validation:Rule => Rule.required()
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
            validation:Rule => Rule.required().min(100).error("Minimum 100 karakter")
        }), 
        defineField({
            name:"price",
            title:"Price",
            type:"number",
           
        }),
        defineField({
            name:"discount",
            title:"Discount",
            type:"number",
            initialValue:0,
            validation:Rule=> Rule.min(0)
        }),
        defineField({
            name:"images",
            title:"Images",
            type:"array",
            of:[
                {type:"object", 
                    fields:[
                        {name:"url" , type:"url", title:"URL"},
                        {name:"file" , type:"file", title:"File"}
                    ]}
               
            ]
            ,validation:Rule => Rule.required().min(3).error("Minimum 3 resim eklemelisiniz")
           
        }),
        defineField({
            name:"coverImage",
            title:"Cover Image",
            type:"object",
            fields: [
                {name:"url" , type:"url", title:"URL"},
                {name:"file" , type:"file", title:"File"}
            ],
            validation: Rule => Rule.required().error("Kapsayıcı bir resim eklemelisiniz")

        }),
        defineField({
            name:"type",
            title:"Room Type",
            type:"string",
            options: {
                list:roomTypes,
            },
            initialValue:"basic",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"specialNote",
            title:"Special Note",
            type:"text",
            initialValue:"Check-in time is 12:00 pm , Ckeckout  time  is 11:59 Am. If you leave behind any items, please contact the receptionist.",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"dimension",
            title:"Dimension",
            type:"string",
        }),
        defineField({
            name:"numberOfBeds",
            title:"Number Of Beds",
            type:"number",
            initialValue:1,
            validation: Rule => Rule.min(1)
        }),
        defineField({
            name:"offeredAmenities",
            title:"Offered Ametinies ",
            type:"array",
            of:[
                {type:"object",fields:[
                    {name:"icon", title:"Icon" ,type:"string"},
                    {name:"amenty", title:"Amenity", type:"string"}
                ]}
            ]
        }),
        defineField({
            name:"isBooked",
            title:"Is Booked",
            type:"boolean",
            initialValue:false
        }),
        defineField({
            name:"isFeatured",
            title:"Is Featured",
            type:"boolean",
            initialValue:false
        }),
        defineField({
            name:"reviews",
            title:"Reviews",
            type:"array",
            of: [
                {type:"review"}
            ]
        })
    ]
}

export default hotelRoom;