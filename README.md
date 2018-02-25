# Angular2-navigate-with-data
Angular2+/4/5 - navigate with data

## Install
<blockquote>
  npm install angular2-navigate-with-data -save
</blockquote>

## How to use
Initialize into app.module.ts
```typescript
  import "angular2-navigate-with-data";
```

## Example
```typescript
import {Router} from '@angular/router';

class PageOne {
    constructor (
        private router: Router
    ){}
    
    public redirect()
    {
        this.router.navigateByData({
            url: ["/PageTwo"],
            data: [1,2,3,4,5], //data - <any> type
            //extras: {} - <NavigationExtras> type, optional parameter
        });
    }
}
```


```typescript
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

