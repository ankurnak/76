let listOfPosts = [

    {

        id: 1,

        post: 'some post1',

        title: 'title 1',

        author: 'Ivanov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            }

        ]

    },

    {

        id: 2,

        post: 'some post2',

        title: 'title 2',

        author: 'Petrov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            },

            {

                id: 1.3,

                comment: 'some comment3',

                title: 'title 3',

                author: 'Rimus'

            }

        ]

    },

    {

        id: 3,

        post: 'some post3',

        title: 'title 3',

        author: 'Rimus'

    },

    {

        id: 4,

        post: 'some post4',

        title: 'title 4',

        author: 'Uncle'

    }

]
function getQuntityPostsByAuthor (listOfPosts, authorName) {
    let quantityOfPosts=0;
let quantityOfComments=0;
    for(const post of listOfPosts){
        
        if(authorName===post.author){
            quantityOfPosts++;
        }
        if (post.comments && post.comments){

        
          for(const comment of post.comments)  {
if(authorName===comment.author){
quantityOfComments++;
}
          }
    }
}
console.log(quantityOfPosts);
console.log(quantityOfComments);
}
getQuntityPostsByAuthor(listOfPosts,"Rimus");