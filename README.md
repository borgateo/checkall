checkall
========

check/uncheck all the checkboxes

### Usage

Create a div with the class "checkbox-list":

```html
<div class="checkbox-list">
```

Then all the checkbox inputs within this div could be checked or unchecked triggering the checkbox with "check-all" class:

```html
<input type="checkbox" name="check-all" value=""> Check/Uncheck All
```

Below you can find a simple 3-checkboxes form with the check/uncheck all:

```html
<div class="checkbox-list">
   <div>
       <input type="checkbox" name="check-all" value=""> Check/Uncheck all
   </div>
   <div>
       <input type="checkbox" name="banana" value="banana"> Banana
   </div>
   <div>
       <input type="checkbox" name="mango" value="mango"> Mango
   </div>
   <div>
       <input type="checkbox" name="grape" value="grape"> Grape
   </div>
</div>
```
