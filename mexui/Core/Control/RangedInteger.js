mexui.util.createControlConstructor('RangedInteger', false, function(window, x, y, w, h, min, max, text, styles, callback)
{
	mexui.Control.TextInput.call(this, window, x, y, w, h, text, this.linkControlStyles('RangedInteger', styles), callback, false, false);
	
	this.min			= min === undefined ? 0 : min;
	this.max			= max === undefined ? 100 : max;
});
mexui.util.extend(mexui.Control.RangedInteger, mexui.Control.TextInput);

// model
mexui.Control.RangedInteger.prototype.validateInputCallback = function(e, character)
{
	var number = parseInt(this.getTextWithNewCharacter(character));
	
	if(!isNaN(number))
		return false;
	
	if(number < this.min || number > this.max)
		return false;
	
	return true;
};