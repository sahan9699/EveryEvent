const categorys = [
    {
        id : "5e83162081d6cf3ff406b257",
        name : "Entertainment",
        image : "music.png",
        subCategory : [{id : "1e13165081d6cf3ff406b257",name : "Band",image : "band.png"},{id : "2e23165081d6cf3ff406b257",name : "DJ",image : "dj.png"},{id : "3e33165081d6cf3ff406b257",name : "Sound",image : "businessman.png"}],
        categoryHeading : "Sri Lanka Best Music Services"

    },
    {
        id : "5e83163081d6cf3ff406b257",
        name : "Vehical",
        image : "vehical.png",
        subCategory : [{id : "1e81165081d6cf3ff406b257",name : "Wedding"},{id : "2e82165081d6cf3ff406b257",name : "Other"},],
        categoryHeading : "Sri Lanka Best Vehical To Your Event"

    },
    {
        id : "5e83164081d6cf3ff406b257",
        name : "Photograpy",
        image : "photograpy.png",
        subCategory : [],
        categoryHeading : "Sri Lanka Best Place To Photography"

    },
    {
        id : "5e83165081d6cf3ff406b257",
        name : "Place",
        image : "place.png",
        subCategory : [{id : "1e83164081d6cf3ff406b257",name : "Indor"},{id : "2e83164081d6cf3ff406b257",name : "OutDoor"}],
        categoryHeading : "Sri Lanka Best Place To Your Event"

    },
    {
        id : "5e83166081d6cf3ff406b257",
        name : "Salon",
        image : "salon.png",
        subCategory : [],
        categoryHeading : "Sri Lanka Best Salons"

    },
    {
        id : "5e83167081d6cf3ff406b257",
        name : "Food",
        image : "food.png",
        subCategory : [{id : "1e83167081d6cf3ff406b257",name : "Catering"},{id : "2e83167081d6cf3ff406b257",name : "Cake"},{id : "3e83167081d6cf3ff406b257",name : "Other"},],
        categoryHeading : "Pets and Animals for sale in Sri Lanka"

    },
    {
        id : "5e83168081d6cf3ff406b257",
        name : "Decoration",
        subCategory : [{id : "1e83168081d6cf3ff406b257",name : "Cards"},{id : "2e83168081d6cf3ff406b257",name : "Fireworks"},{id : "3e83168081d6cf3ff406b257",name : "Lighting"},{id : "4e83168081d6cf3ff406b257",name : "Decoretor"}],
        image : "decoration.png",
        categoryHeading : "Sri lanka Beast Decoration"

    },
    {
        id : "5e83169081d6cf3ff406b257",
        name : "Dressing",
        image : "dressing.png",
        subCategory : [{id : "1e83169081d6cf3ff406b257",name : "Rent Only",image : "rent.png","description" : "getOneCategory dsvsvsvsvvds   sddsvvssssssssssvs sdvsdvsdvsvs"},{id : "2e83169081d6cf3ff406b257",name : "Rent and Sell",image : "sale.png"},{id : "3e83169081d6cf3ff406b257",name : "Sell Only",image : "sale.png"}],
        categoryHeading : "Pets and Animals for sale in Sri Lanka"

    }
]

export function getAllCategory(){
    return categorys;
}

export function getOneCategory(id){
   return categorys.find(category => category.id === id);
}
export function getOneSubCategory(id){
    const subCategoryOne = categorys.subCategory;
    const selectOneSubCategory =  subCategoryOne.find(category => category.id === id);
    return selectOneSubCategory;
 }
export function getSubCategory(id){
   const selectCategory =  categorys.find(category => category.id === id);
   return selectCategory.subCategory;
}