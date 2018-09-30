import { dfareporting_v2_8 } from './v2.8';
import { dfareporting_v3_0 } from './v3.0';
import { dfareporting_v3_1 } from './v3.1';
import { dfareporting_v3_2 } from './v3.2';
export declare const VERSIONS: {
    'v2.8': typeof dfareporting_v2_8.Dfareporting;
    'v3.0': typeof dfareporting_v3_0.Dfareporting;
    'v3.1': typeof dfareporting_v3_1.Dfareporting;
    'v3.2': typeof dfareporting_v3_2.Dfareporting;
};
export declare function dfareporting(version: 'v2_8'): dfareporting_v2_8.Dfareporting;
export declare function dfareporting(options: dfareporting_v2_8.Options): dfareporting_v2_8.Dfareporting;
export declare function dfareporting(version: 'v3_0'): dfareporting_v3_0.Dfareporting;
export declare function dfareporting(options: dfareporting_v3_0.Options): dfareporting_v3_0.Dfareporting;
export declare function dfareporting(version: 'v3_1'): dfareporting_v3_1.Dfareporting;
export declare function dfareporting(options: dfareporting_v3_1.Options): dfareporting_v3_1.Dfareporting;
export declare function dfareporting(version: 'v3_2'): dfareporting_v3_2.Dfareporting;
export declare function dfareporting(options: dfareporting_v3_2.Options): dfareporting_v3_2.Dfareporting;
