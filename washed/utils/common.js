const addHrefToList = (list,href) => {
    let newList = [];
    list.forEach((element)=> {
        element.href = `${href}/${element._id}`;
        newList.push(element);
    });

   return newList;
};

module.exports = {
    addHrefToList : addHrefToList
};