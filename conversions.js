
function fromInches()
{
    var inches = $("#Inches");
    var feet = $("#Feet");
    var mm = $("#Millimeters");
    var cm = $("Centimeters");
    var m = $("#Meters");

    //inches.val();
    feet.val(inches.val() / 12);
    mm.val(inches.val() * 25.4);
    cm.val(inches.val() * 2.54);
    m.val(inches.val() * 0.254);
}

function fromFeet()
{
    var inches = $("#Inches");
    var feet = $("#Feet");
    var mm = $("#Millimeters");
    var cm = $("#Centimeters");
    var m = $("#Meters");

    inches.val(feet.val() * 12);
    //feet.val();
    mm.val(feet.val() * 304.8);
    cm.val(feet.val() * 30.48);
    m.val(feet.val() * 3.048 );
}

function fromMillimeters()
{
    var inch = $("#Inches");
    var feet = $("#Feet");
    var mm = $("#Millimeters");
    var cm = $("#Centimeters");
    var m = $("#Meters");

    inch.val(mm.val() * 0.0393701);
    feet.val((mm.val() / 12) * 0.0393701);
    //mm.val();
    cm.val(mm.val() / 10);
    m.val(mm.val() / 1000);
}

function fromCentimeters()
{
    var inches = $("#Inches");
    var feet = $("#Feet");
    var mm = $("#Millimeters");
    var cm = $("#Centimeters");
    var m = $("#Meters");

    inches.val(cm.val() * 0.393701);
    feet.val((cm.val() * 0.393701) / 12);
    mm.val(cm.val() * 10);
    //cm.val(cm.val);
    m.val(cm.val() /100);
}

function fromMeters()
{
    var inches = $("#Inches");
    var feet = $("#Feet");
    var mm = $("#Millimeters");
    var cm = $("#Centimeters");
    var m = $("#Meters");

    inches.val();
    feet.val(m.val() / 12);
    mm.val(m.val() * 1000);
    cm.val(m.val() * 100);
    //m.val();
}

function calculateTileSize()
{
    var tile = $("#tileHeight").val() * $("#tileWidth").val();
    var tileArea = $("#tileArea");
    var tileResult = $("#tileResult");

    tileResult.val(Math.ceil(tileArea.val() / tile));
}