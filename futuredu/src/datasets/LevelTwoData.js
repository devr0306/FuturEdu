const LevelTwoData = [
    {
        id:"algebra",
        name:"Algebra",
        category:"math",
        description:"Algebra is one of the broad parts of mathematics,together with number theory, geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics.",
        prerequisites:""
    },{
        id:"geometry",
        name:"Geometry",
        category:"math",
        description:"Geometry is, with arithmetic, one of the oldest branches of mathematics. It is concerned with properties of space that are related with distance, shape, size, and relative position of figures. A mathematician who works in the field of geometry is called a geometer",
        prerequisites:""
    },{
        id:"calculus",
        name:"Calculus",
        category:"math",
        description:"Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals', is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations",
        prerequisites:"Algebra and Geometry"
    },{
        id:"vectors",
        name:"Vectors",
        category:"physics",
        description:"In mathematics and physics, a vector is an element of a vector space. For many specific vector spaces, the vectors have received specific names, which are listed below. Historically, vectors were introduced in geometry and physics before the formalization of the concept of vector space",
        prerequisites:"Geometry and Trignometry"
    },{
        id:"atoms",
        name:"Atoms and Molecules",
        category:"chemistry",
        description:"  ‌‌Atoms‌ ‌and‌ ‌Molecular‌ ‌Structures-‌ ‌Information‌ ‌on‌ ‌the‌ ‌structure‌ ‌of‌ ‌atoms‌ ‌and‌ ‌molecules,‌ ‌along‌ ‌with‌ ‌trends‌ ‌followed‌ ‌by‌ ‌elements‌ ‌on‌ ‌the‌ ‌periodic‌ ‌table.‌",
        prerequisites:""
    },{
        id:"mechanics",
        name:"Mechanics",
        category:"physics",
        description:"Study‌ ‌the‌ ‌motion‌ ‌of‌ ‌objects,‌ ‌and‌ ‌forces‌ ‌causing‌ ‌the‌ ‌motion.‌ ‌Also‌ ‌includes‌ ‌energy‌ ‌and‌ ‌momentum.‌",
        prerequisites:"Vectors and Calculus"
    },{
        id:"java",
        name:"Java",
        category:"compsci",
        description:"One of the most popular programming languages which is Object Oriented. Great for learning concepts but harder to learn than languages like python. One of the languages used in Android App development.",
        prerequisites:""
    },{
        id:"java",
        name:"Java",
        category:"ai",
        description:"One of the most popular programming languages which is Object Oriented. Great for learning concepts but harder to learn than languages like python. One of the languages used in Android App development.",
        prerequisites:"Multivariate Calculus, Linear Algebra, Statistics"
    }
]

export default LevelTwoData;