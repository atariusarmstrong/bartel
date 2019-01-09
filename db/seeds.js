const Bar = require('../models/Bar')
const Comment = require('../models/Comment')

Bar.deleteMany({})
    .then(() => {
        return Bar.create({
            barName: "Einstein's",
            location: "Atlanta, GA",
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

        Promise.all([comment1])
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