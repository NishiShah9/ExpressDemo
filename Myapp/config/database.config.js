module.exports={
    url:"mongodb://192.168.0.6:40017/test_sunil"
}
// getFilter: async (options) => {
//     let filter = {
//         where: {
//             or: []
//         }
//     };
//     // manage pagination logic
//     if (options.page && options.limit) {
//         filter.skip = (options.page - 1) * options.limit;
//         filter.limit = options.limit;
//     }


//     // sort by request
//     if (options.sort) {
//         filter.sort = options.sort;
//     }
//     else {
//         filter.sort = [
//             { createdAt: "DESC" },
//             { updatedAt: "DESC" }
//         ];
//     }

//     if (_.has(options, "isActive")) {
//         filter.where.isActive = options.isActive;
//     }

//     if (_.has(options, "isDeleted")) {
//         filter.where.isDeleted = options.isDeleted;
//     }

//     // filter by start with
//     if (options.startWith
//         && options.startWith.keys
//         && options.startWith.keyword) {
//         _.forEach(options.startWith.keys, function (key) {
//             if (key) {
//                 let orArray = {};
//                 orArray[key] = {
//                     startsWith: options.startWith.keyword
//                 };
//                 filter.where.or.push(orArray);
//             }
//         });
//     }

//     if (options.search
//         && options.search.keys
//         && options.search.keyword) {
//         _.forEach(options.search.keys, function (key) {
//             if (key) {
//                 let orArray = {};
//                 orArray[key] = {
//                     contains: options.search.keyword
//                 };
//                 filter.where.or.push(orArray);
//             }
//         });
//     }
//     // NOTE:- keep this filter at end
//     if (_.has(options, "id")) {
//         filter = {
//             where: { id: options.id }
//         };
//     }
//     // projection by request
//     if (options.project) {
//         filter.select = options.project;
//     }
//     if (options.filter) {
//         filter.where = _.extend(filter.where, options.filter);
//     }

//     if (filter.where.or && !filter.where.or.length) {
//         delete filter.where.or;
//     }

//     return filter;
// },


// async paginate(req, res) {
//     let params = req.allParams();
//     try {
//       // get filter
//       let filter = await common.getFilter(params);
//       filter.where.fromdateTime = {
//         "<=": moment().toISOString()
//       };
//       filter.where.toDateTime = {
//         ">=": moment().toISOString()
//       };

//       filter.sort = [
//         {
//           fromdateTime: "ASC"
//         }
//       ];
//       let countFilter = _.cloneDeep(filter.where);
//       let recordsList = await Banner.find(filter).meta({
//         enableExperimentalDeepTargets: true
//       });
//       if (!recordsList.length) {
//         return res.ok({}, sails.config.message.RECORD_LIST_NOT_FOUND);
//       }

//       let response = {
//         list: recordsList
//       };
//       // count

//       response.count = await Banner.count(countFilter).meta({
//         enableExperimentalDeepTargets: true
//       });
//       return res.ok(response, sails.config.message.OK);
//     } catch (error) {
//       console.log(error);
//       return res.serverError(null, sails.config.message.SERVER_ERROR);
//     }
//   },
