import { MatPaginatorIntl } from '@angular/material/paginator';

export class FaMatPaginatorIntl extends MatPaginatorIntl {
    constructor() {
        super();
        this.getAndInitTranslations();
    }
    getAndInitTranslations() {
        this.itemsPerPageLabel = 'تعداد نمایش';
        this.nextPageLabel = 'test';
        this.previousPageLabel = 'test';
        this.changes.next();
    }
    // itemsPerPageLabel = 'تعداد نمایش';
    // nextPageLabel = 'بعدی';
    // previousPageLabel = 'قبلی';
    // firstPageLabel = 'اولین صفحه';
    // lastPageLabel = 'آخرین صفحه';

    // tslint:disable-next-line:only-arrow-functions
    getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return '0 od ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' از ' + length;
    };
}
