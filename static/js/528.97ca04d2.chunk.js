(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[528],{1140:function(e,t,r){!function(e){"use strict";(function(e){e.defineMode("powershell",(function(){function e(e,t){for(var r=void 0!==(t=t||{}).prefix?t.prefix:"^",n=void 0!==t.suffix?t.suffix:"\\b",o=0;o<e.length;o++)e[o]instanceof RegExp?e[o]=e[o].source:e[o]=e[o].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(r+"("+e.join("|")+")"+n,"i")}var t=/[\w\-:]/,r=e([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:"(?=[^A-Za-z\\d\\-_]|$)"}),n=e(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),o=e([n,/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/],{suffix:""}),i=e([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),a=e([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),s={keyword:r,number:/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,operator:o,builtin:e([/[A-Z]:|%|\?/i,i,a],{suffix:"(?=[^A-Za-z\\d\\-_]|$)"}),punctuation:/[\[\]{},;`\\\.]|@[({]/,identifier:/^[A-Za-z\_][A-Za-z\-\_\d]*\b/};function u(e,r){var n=r.returnStack[r.returnStack.length-1];if(n&&n.shouldReturnFrom(r))return r.tokenize=n.tokenize,r.returnStack.pop(),r.tokenize(e,r);if(e.eatSpace())return null;if(e.eat("("))return r.bracketNesting+=1,"punctuation";if(e.eat(")"))return r.bracketNesting-=1,"punctuation";for(var o in s)if(e.match(s[o]))return o;var i=e.next();if("'"===i)return function(e,t){var r;for(;null!=(r=e.peek());)if(e.next(),"'"===r&&!e.eat("'"))return t.tokenize=u,"string";return"error"}(e,r);if("$"===i)return P(e,r);if('"'===i)return c(e,r);if("<"===i&&e.eat("#"))return r.tokenize=f,f(e,r);if("#"===i)return e.skipToEnd(),"comment";if("@"===i){var a=e.eat(/["']/);if(a&&e.eol())return r.tokenize=b,r.startQuote=a[0],b(e,r);if(e.eol())return"error";if(e.peek().match(/[({]/))return"punctuation";if(e.peek().match(t))return P(e,r)}return"error"}function c(e,t){for(var r;null!=(r=e.peek());){if("$"===r)return t.tokenize=p,"string";if(e.next(),"`"!==r){if('"'===r&&!e.eat('"'))return t.tokenize=u,"string"}else e.next()}return"error"}function p(e,t){return S(e,t,c)}function l(e,t){return t.tokenize=b,t.startQuote='"',b(e,t)}function m(e,t){return S(e,t,l)}function S(e,t,r){if(e.match("$(")){var n=t.bracketNesting;return t.returnStack.push({shouldReturnFrom:function(e){return e.bracketNesting===n},tokenize:r}),t.tokenize=u,t.bracketNesting+=1,"punctuation"}return e.next(),t.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:r}),t.tokenize=P,t.tokenize(e,t)}function f(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&">"==r){t.tokenize=u;break}n="#"===r}return"comment"}function P(e,r){var n=e.peek();return e.eat("{")?(r.tokenize=d,d(e,r)):void 0!=n&&n.match(t)?(e.eatWhile(t),r.tokenize=u,"variable-2"):(r.tokenize=u,"error")}function d(e,t){for(var r;null!=(r=e.next());)if("}"===r){t.tokenize=u;break}return"variable-2"}function b(e,t){var r=t.startQuote;if(e.sol()&&e.match(new RegExp(r+"@")))t.tokenize=u;else if('"'===r)for(;!e.eol();){var n=e.peek();if("$"===n)return t.tokenize=m,"string";e.next(),"`"===n&&e.next()}else e.skipToEnd();return"string"}return{startState:function(){return{returnStack:[],bracketNesting:0,tokenize:u}},token:function(e,t){return t.tokenize(e,t)},blockCommentStart:"<#",blockCommentEnd:"#>",lineComment:"#",fold:"brace"}})),e.defineMIME("application/x-powershell","powershell")})(r(38))}()}}]);
//# sourceMappingURL=528.97ca04d2.chunk.js.map