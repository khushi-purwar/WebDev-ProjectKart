"use strict"

module.exports = {
    baseCreate: create,
    baseBulkCreate: bulkCreate,
    baseDetail: detail,
    baseList: list,
    baseUpdate: update,
    baseDelete: deleteEntry,
    baseRestore: baseRestore,
    baseCount: count,
    baseAggregate: aggregate
};

function create (modal, data) {
    return modal.create(data);
}

function bulkCreate (modal, data) {
    return modal.bulkCreate(data, { returning: true });
}

function count (modal, searchParams) {
    return modal.count({ where: searchParams });
}

function detail (modal, params) {
    const query = {
        where: params.searchParams
    };
    if (params.hasOwnProperty('attributes')) {
        query['attributes'] = params.attributes;
    }
    if (params.hasOwnProperty('include')) {
        query['include'] = params.include;
    }
    if (params.hasOwnProperty('paranoid')) {
        query['paranoid'] = params.paranoid;
    }
    if (params.hasOwnProperty('order')) {
        query['order'] = params.order;
    }

    return modal.findOne(query);
}

function list (modal, params) {
    let withPagination = false;

    const query = {
        where: params.searchParams || params.where || {}
    };

    if (params.hasOwnProperty('attributes')) {
        query['attributes'] = params.attributes;
    }
    if (params.hasOwnProperty('include')) {
        query['include'] = params.include;
        // distinct is true because paginator count include as row
        query['distinct'] = true;
    }
    if (params.hasOwnProperty('order')) {
        query['order'] = params.order;
    }
    if (params.hasOwnProperty('limit')) {
        query['limit'] = params.limit;
        withPagination = true;
    }
    if (params.hasOwnProperty('paranoid')) {
        query['paranoid'] = params.paranoid;
    }
    if (params.hasOwnProperty('offset')) {
        query['offset'] = params.offset;
        withPagination = true;
    }
    if (params.hasOwnProperty('isRaw')) {
        query['raw'] = params.isRaw;
    }
    if (params.hasOwnProperty('distinct')) {
        query['distinct'] = params.distinct;
    }
    if (params.hasOwnProperty('group')) {
        query['group'] = params.group;
    }
    if (params.hasOwnProperty('having')) {
        query['having'] = params.having;
    }

    if (withPagination) {
        return modal.findAndCountAll(query);
    } else {
        return modal.findAll(query);
    }
}

function update (modal, params, data) {
    let queryParams = {};
    if (params.hasOwnProperty('searchParams')) {
        queryParams = { where: params.searchParams };
    } else {
        queryParams = { where: params };
    }
    if (params.hasOwnProperty('limit')) {
        queryParams['limit'] = params.limit;
    }
    if (params.hasOwnProperty('paranoid')) {
        queryParams['paranoid'] = params.paranoid;
    }
    return modal.update(data, queryParams);
}

function deleteEntry (modal, searchParams) {
    return modal.destroy({ where: searchParams });
}

function baseRestore (modal, searchParams) {
    return modal.restore({ where: searchParams });
}

function aggregate (modal, column, fn, option) {
    return modal.aggregate(column, fn, option);
}