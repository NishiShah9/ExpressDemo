module.exports = (app) => {
    const notes = require('../controller/note.controller');

    // Create a new Note
    app.post('/create', notes.create);

    // Retrieve all Notes
    app.get('/paginate', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}
// module.exports.routes = {
//     'POST /admin/banner/create': {
//         controller: 'Admin/BannerController', 
//         action: 'create',
//         swagger: {
//             summary: 'create Banner',
//             description: 'This is for creating Banner',
//             body: {
    
//                 fontColor: {
//                     type: "STRING"
//                 },
//                 searchBarPosition: {
//                     type: "STRING"
//                 },
//                 backgroundImage : {
//                     type: "STRING"
//                 },
//                 fromdateTime: {
//                     type: "DATETIME"
//                 },
//                 toDateTime: {
//                     type: "DATETIME"
//                 },
//                 isActive: {
//                     type: "BOOLEAN",
//                     defaultsTo: true
//                 },
//                  type: {
//                     type: "STRING"
//                 },
//                 url : {
//                     type: "STRING"
//                 },
//                 activity:{
//                     type: "STRING"
//                 },
    
//             }
//         },
//     },
//     'POST /admin/banner/paginate':{
//         controller: 'Admin/BannerController', 
//         action: 'paginate',
//         swagger: {
//             summary: 'banner listing',
//             description: 'This is for banner listing',
//             body: {
    
//                 fontColor: {
//                     type: "STRING"
//                 },
//                 searchBarPosition: {
//                     type: "STRING"
//                 },
//                 backgroundImage : {
//                     type: "STRING"
//                 },
//                 fromdateTime: {
//                     type: "DATETIME"
//                 },
//                 toDateTime: {
//                     type: "DATETIME"
//                 },
//                 isActive: {
//                     type: "BOOLEAN",
//                     defaultsTo: true
//                 },
//                  type: {
//                     type: "STRING"
//                 },
//                 url : {
//                     type: "STRING"
//                 },
//                 activity:{
//                     type: "STRING"
//                 },
    
//             }
//         },
//     },
//     'PUT /admin/banner/:id': {
//         controller: 'Admin/BannerController', 
//         action: 'update',
//         swagger: {
//             summary: 'update Banner',
//             description: 'This is for updating Banner',
//             body: {
    
//                 fontColor: {
//                     type: "STRING"
//                 },
//                 searchBarPosition: {
//                     type: "STRING"
//                 },
//                 backgroundImage : {
//                     type: "STRING"
//                 },
//                 fromdateTime: {
//                     type: "STRING"
//                 },
//                 toDateTime: {
//                     type: "STRING"
//                 },
//                 isActive: {
//                     type: "BOOLEAN",
//                     defaultsTo: true
//                 },
//                  type: {
//                     type: "STRING"
//                 },
//                 url : {
//                     type: "STRING"
//                 },
//                 activity:{
//                     type: "STRING"
//                 },
    
//             }
//         },
//     },

//         'DELETE /Admin/banner/:id': {
//             controller: 'Admin/BannerController', 
//             action: 'delete',
//             swagger: {
//                 summary: 'delete Banner',
//                 description: 'This is for deleting Banner',
//                 body: {
        
//                    id:{
//                         type: "STRING"
//                     },
//                 }
//             }
//         },
//         'GET /admin/bannerview/:id': 'Admin/BannerController.view',
// }
