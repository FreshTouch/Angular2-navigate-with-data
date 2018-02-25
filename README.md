# Angular2-navigate-with-data
Angular2+/ - navigate with data

## How to use
Init into app.module
<blockquote>
  import "./reflect-router";
</blockquote>

## Example
```
import {Router} from '@angular/router';

class PageOne {
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

class PageTwo implements OnInit {
    constructor (
        private router: Router
    ){}
    
    public ngOnInit()
    {
    	console.log(this.router.getNavigatedData()); //output [1,2,3,4,5]
    }
}
```

