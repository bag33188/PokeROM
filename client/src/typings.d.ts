/* CommonJS module definition */
declare var module: NodeModule;

/* CommonJS module interfaces */
interface NodeRequireFunction {
  (id: string): any;
}
interface NodeRequire extends NodeRequireFunction {
  resolve: RequireResolve;
  cache: any;
  extensions: NodeExtensions;
  main: NodeModule | undefined;
}
interface RequireResolve {
  (id: string, options?: { paths?: string[] }): string;
  paths(request: string): string[] | null;
}
interface NodeExtensions {
  '.js': (m: NodeModule, filename: string) => any;
  '.json': (m: NodeModule, filename: string) => any;
  '.node': (m: NodeModule, filename: string) => any;
  [ext: string]: (m: NodeModule, filename: string) => any;
}
interface NodeModule {
  exports: any;
  require: NodeRequireFunction;
  id: string;
  filename: string;
  loaded: boolean;
  parent: NodeModule | null;
  children: NodeModule[];
  paths: string[];
}

/* Module Delcarations */
declare module 'axios'; // axios ajax library
declare module 'he'; // html decoding library
declare module 'jquery'; // jquery library
declare module 'sprintf-js'; // print-string formatter
declare module 'typescript-string-operations'; // post-string-interpolation formatter
