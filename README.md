# Angular2-navigate-with-data
Angular2+/ - navigate with data

## How to use
Init into app.module
<blockquote>
  import {ReflectionAngularModules} from "./reflection.angularModules";
  
  ReflectionAngularModules.init();
</blockquote>

## Example
```
import {Router} from '@angular/router';

class Page_one {
    constructor (
        private router: Router
    ){}
    
    public redirect()
    {
        this.router.navigateByData({
            url: ["/Page_two"],
            data: [1,2,3,4,5] //data - <any> type
        });
    }
}
```


```
import {Router} from '@angular/router';
import {OnInit} from "@angular/core";

class Page_two implements OnInit {
    constructor (
        private router: Router
    ){}
    
    public ngOnInit() : void
    {
    	console.log(this.router.getNavigatedData()); //output [1,2,3,4,5]
    }
}
```

