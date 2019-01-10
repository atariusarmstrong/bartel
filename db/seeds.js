const Bar = require('../models/Bar')
const Comment = require('../models/Comment')
const User = require('../models/User')

Comment.deleteMany({})
    .then(() => {
User.deleteMany({})
    .then(() => {
Bar.deleteMany({})
    .then(() => {
        return Bar.create({
            barName: "Einstein's",
            location: "Atlanta, GA",
            author: [],
            image: "https://resizer.otstatic.com/v2/photos/huge/23712449.jpg",
            description: "Lovely restaurant. Great for Sunday Brunch. Nene Leakes has been spotted here before. Be sure to try their mimosas",
            comments: []
        }).then((bar)=> {
            const comment1 = Comment.create({
                user: "Morgan",
                text: "That's right! I saw Nene Leakes there too!"
            }).then((comment)=> {
                bar.comments.push(comment)
            })

            const author = User.create({
                username: "Samantha",
                email: 'samantha@samantha.com',
                bio: 'I love traveling.',
                img: 'https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }).then((samantha)=> {
                bar.author.push(samantha)
            })

        Promise.all([comment1, author])
        .then(()=> {
            bar.save()


        })
        })

        
    })
    .then(()=> {
        return Bar.create({
            barName: "Joe's on Juniper",
            location: "Atlanta, GA",
            image: 'https://joesonjuniper.com/wp-content/gallery/joes/1527083_10152186728356803_1829062229_n.jpg',
            description: "Wonderful LGBT friendly restuarant with HUGE patio -- perfect for Summertime fun",
            comments: []
        }).then((bar) => {
            const comment1 = Comment.create({
                user: "Ashley",
                text: "Love this place"
            }).then((comment)=> {
                bar.comments.push(comment)
            })

            const comment2 = Comment.create({
                user: "Eric",
                text: "Love the patio. Slow service, however. Maybe I'll give it another try."
            }).then((comment) => {
                bar.comments.push(comment)
            })

        Promise.all([comment1, comment2])
        .then(()=> {
            bar.save()
        })


        
        })
    })
})
    })