$(document).ready(function(){

    // $('body').append("<p>JQ Works!</p>")
    //******************************************************** Zipcode Data *********************************************************************/
    $('#zipcode-search').submit(function(e){
        //stops default action of element from happening
            e.preventDefault();
            // console.log("form is good!")
            //variable will store the value of the form element
            const zipcodeData = $('#zip-search-request').val();
            // console.log(zipcodeData);
            const schoolRequest = {
            url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?&location_zip=${zipcodeData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    //variable to hold looped data
                    const schoolDistrict= data[i]; 
                    console.log(schoolDistrict);
                    console.log(schoolDistrict.long_name);
                    //<tr> defines a row in an HTML table
                    const school = $('<tr></tr>')
                    //add class of schoolName to school variable (CSS manipulation)
                    school.addClass('schoolName')
                    //text for school names will appear
                    school.text(schoolDistrict.long_name)
                    //<tbody id="getThisDone"> etc...attaching school variable contents here
                    $('#getThisDone').append(school)
     
                   
                
                    
                };
    },
        
        
    error: ()=>{
        console.log('bad request');
    
    }
    
    
    
    }     
    
    
    $.ajax(schoolRequest)
    
    
    
    });
    
    });
    
    //************************************************************ Ratings Data **********************************************************/
    // $(document).ready(function(){
    $('#ratings-search').submit(function(e){
            e.preventDefault();
            // console.log("form is good!")
            const ratingData = $('#rating-search-request').val();
            // console.log(ratingData);
            const ratingRequest = {
                url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?overall_rating=${ratingData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    const schoolRating = data[i]; 
                    console.log(schoolRating);
                    console.log(schoolRating.long_name);
                    const school1 = $('<tr></tr>')
                    school1.addClass('school1Name')
                    school1.text(schoolRating.long_name)
                    $('#getThisDone1').append(school1)
                    // if(i === 0){
                       
                    //     $('.ratingSchool').append(schoolRating.rating_statement)
                    // }
                    // if(i === 1){
                
                    //     $('.ratingSchool2').append(schoolRating.rating_statement)
                    // }
                    // if(i === 2){
                    
                    //     $('.ratingSchool3').append(schoolRating.rating_statement)
                    // };
    
                }
                
    
        },
    
    
        error: ()=>{
            console.log('bad request');
    
        }
    
        
    
       }     
        
    
    $.ajax(ratingRequest)
    
    });
    
    
    
    // });
    
    //****************************************************** Dress Code Data **********************************************************/
    // $(document).ready(function(){
        $('#dress-search').submit(function(e){
            e.preventDefault();
            // console.log("form is good!")
            const dressData = $('#dress-search-request').val();
            // console.log(ratingData);
            const dressRequest = {
                url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?dress_code=${dressData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    const dressSummary = data[i]; 
                    console.log(dressSummary);
                    console.log(dressSummary.long_name);
                    const dress = $('<tr></tr>')
                    dress.addClass('dressName')
                    dress.text(dressSummary.long_name)
                    $('#getThisDone2').append(dress)
                    // if(i === 0){
                       
                    //     $('.ratingSchool').append(schoolRating.rating_statement)
                    // }
                    // if(i === 1){
                
                    //     $('.ratingSchool2').append(schoolRating.rating_statement)
                    // }
                    // if(i === 2){
                    
                    //     $('.ratingSchool3').append(schoolRating.rating_statement)
                    // };
    
                }
                
    
        },
    
    
        error: ()=>{
            console.log('bad request');
    
        }
    
        
    
       }     
        
    
    $.ajax(dressRequest)
    
    });
    
    
    
    // });
    
    
    //********************************************************* Elevated Train Access Data *****************************************************/
    // $(document).ready(function(){
        $('#el-search').submit(function(e){
            e.preventDefault();
            // console.log("form is good!")
            const elData = $('#el-search-request').val();
            // console.log(ratingData);
            const elRequest = {
                url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?transportation_el=${elData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    const elSummary = data[i]; 
                    console.log(elSummary);
                    console.log(elSummary.long_name);
                    const el = $('<tr></tr>')
                   el.addClass('elName')
                    el.text(elSummary.long_name)
                    $('#getThisDone3').append(el)
                    // if(i === 0){
                       
                    //     $('.ratingSchool').append(schoolRating.rating_statement)
                    // }
                    // if(i === 1){
                
                    //     $('.ratingSchool2').append(schoolRating.rating_statement)
                    // }
                    // if(i === 2){
                    
                    //     $('.ratingSchool3').append(schoolRating.rating_statement)
                    // };
    
                }
                
    
        },
    
    
        error: ()=>{
            console.log('bad request');
    
        }
    
        
    
       }     
        
    
    $.ajax(elRequest)
    
    });
    
    
    
    // });
    
    
    //****************************************************** Metro Bus Access Data **********************************************************/
    // $(document).ready(function(){
        $('#bus-search').submit(function(e){
            e.preventDefault();
            // console.log("form is good!")
            const busData = $('#bus-search-request').val();
            // console.log(ratingData);
            const busRequest = {
                url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?transportation_bus=${busData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    const busSummary = data[i]; 
                    console.log(busSummary);
                    console.log(busSummary.long_name);
                    const bus = $('<tr></tr>')
                   bus.addClass('busName')
                    bus.text(busSummary.long_name)
                    $('#getThisDone4').append(bus)
                    // if(i === 0){
                       
                    //     $('.ratingSchool').append(schoolRating.rating_statement)
                    // }
                    // if(i === 1){
                
                    //     $('.ratingSchool2').append(schoolRating.rating_statement)
                    // }
                    // if(i === 2){
                    
                    //     $('.ratingSchool3').append(schoolRating.rating_statement)
                    // };
    
                }
                
    
        },
    
    
        error: ()=>{
            console.log('bad request');
    
        }
    
        
    
       }     
        
    
    $.ajax(busRequest)
    
    });
    
    
    
    // });