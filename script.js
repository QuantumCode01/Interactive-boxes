function showUnitPrice(unitId) {
           
    let allUnitDivs = document.querySelectorAll('.first-unit, .second-unit, .third-unit');

      
        allUnitDivs.forEach(function(div) {
        
            div.style.border = '0.9px solid #C8C8C8'; 
            div.style.backgroundColor = '#fff';
            let radioBtn = div.querySelector('.radio-btn');
            if (radioBtn) {
                radioBtn.checked = false;
            }
            let specificationbox=div.querySelector('.specification-box');
            specificationbox.style.display='none';

        });
    let unitDiv = document.getElementById(unitId);          
    unitDiv.style.border = '2px solid #FF6B82';
    unitDiv.style.backgroundColor = '#FFF9FA';
    
    let radioButton = unitDiv.querySelector('.radio-btn');
    if (radioButton) {
        radioButton.checked = true; 
    }
    let specificationbox=unitDiv.querySelector('.specification-box');
    specificationbox.style.display='flex';
    
    let unitPriceText = unitDiv.querySelector('.unit-price').textContent;
    
  
    document.getElementById('priceDisplay').textContent = `Total : ${unitPriceText}`;
    }