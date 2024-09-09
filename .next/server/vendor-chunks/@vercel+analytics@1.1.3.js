"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel+analytics@1.1.3";
exports.ids = ["vendor-chunks/@vercel+analytics@1.1.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.0-canary.62_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.1.3\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = isDevelopment() ? \"https://va.vercel-scripts.com/v1/script.debug.js\" : \"/_vercel/insights/script.js\";\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.setAttribute(\"data-sdkn\", name);\n    script.setAttribute(\"data-sdkv\", version);\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.setAttribute(\"data-debug\", \"false\");\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\n// src/react.tsx\nfunction Analytics({ beforeSend, debug = true, mode = \"auto\" }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            beforeSend,\n            debug,\n            mode\n        });\n    }, [\n        beforeSend,\n        debug,\n        mode\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHZlcmNlbCthbmFseXRpY3NAMS4xLjMvbm9kZV9tb2R1bGVzL0B2ZXJjZWwvYW5hbHl0aWNzL2Rpc3QvcmVhY3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O3FFQUVBLGdCQUFnQjtBQUNrQjtBQUVsQyxlQUFlO0FBQ2YsSUFBSUMsT0FBTztBQUNYLElBQUlDLFVBQVU7QUFFZCxlQUFlO0FBQ2YsSUFBSUMsWUFBWTtJQUNkLElBQUlDLE9BQU9DLEVBQUUsRUFDWDtJQUNGRCxPQUFPQyxFQUFFLEdBQUcsU0FBU0MsRUFBRSxHQUFHQyxNQUFNO1FBQzdCSCxDQUFBQSxPQUFPSSxHQUFHLEdBQUdKLE9BQU9JLEdBQUcsSUFBSSxFQUFFLEVBQUVDLElBQUksQ0FBQ0Y7SUFDdkM7QUFDRjtBQUVBLGVBQWU7QUFDZixTQUFTRztJQUNQLE9BQU8sZ0JBQWtCO0FBQzNCO0FBQ0EsU0FBU0M7SUFDUCxJQUFJO1FBQ0YsTUFBTUMsTUF4QlY7UUF5QkksSUFBSUEsUUFBUSxpQkFBaUJBLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9DLEdBQUcsQ0FDWjtJQUNBLE9BQU87QUFDVDtBQUNBLFNBQVNDLFFBQVFDLE9BQU8sTUFBTTtJQUM1QixJQUFJQSxTQUFTLFFBQVE7UUFDbkJYLE9BQU9ZLEdBQUcsR0FBR0w7UUFDYjtJQUNGO0lBQ0FQLE9BQU9ZLEdBQUcsR0FBR0Q7QUFDZjtBQUNBLFNBQVNFO0lBQ1AsTUFBTUYsT0FBT0wsY0FBY04sT0FBT1ksR0FBRyxHQUFHTDtJQUN4QyxPQUFPSSxRQUFRO0FBQ2pCO0FBQ0EsU0FBU0c7SUFDUCxPQUFPRCxjQUFjO0FBQ3ZCO0FBQ0EsU0FBU0U7SUFDUCxPQUFPRixjQUFjO0FBQ3ZCO0FBQ0EsU0FBU0csVUFBVUMsR0FBRyxFQUFFLEVBQUUsQ0FBQ0EsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsTUFBTTtJQUMzQyxPQUFPQTtBQUNUO0FBQ0EsU0FB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QUFTRSxVQUFVLEVBQ2pCdkIsVUFBVSxFQUNWRixRQUFRLElBQUksRUFDWnRCLE9BQU8sTUFBTSxFQUNkO0lBQ0NmLGdEQUFTQSxDQUFDO1FBQ1JvQyxPQUFPO1lBQUVHO1lBQVlGO1lBQU90QjtRQUFLO0lBQ25DLEdBQUc7UUFBQ3dCO1FBQVlGO1FBQU90QjtLQUFLO0lBQzVCLE9BQU87QUFDVDtBQUlFLENBQ0YsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0B2ZXJjZWwrYW5hbHl0aWNzQDEuMS4zL25vZGVfbW9kdWxlcy9AdmVyY2VsL2FuYWx5dGljcy9kaXN0L3JlYWN0L2luZGV4LmpzPzA1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHNyYy9yZWFjdC50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBwYWNrYWdlLmpzb25cbnZhciBuYW1lID0gXCJAdmVyY2VsL2FuYWx5dGljc1wiO1xudmFyIHZlcnNpb24gPSBcIjEuMS4zXCI7XG5cbi8vIHNyYy9xdWV1ZS50c1xudmFyIGluaXRRdWV1ZSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy52YSlcbiAgICByZXR1cm47XG4gIHdpbmRvdy52YSA9IGZ1bmN0aW9uIGEoLi4ucGFyYW1zKSB7XG4gICAgKHdpbmRvdy52YXEgPSB3aW5kb3cudmFxIHx8IFtdKS5wdXNoKHBhcmFtcyk7XG4gIH07XG59O1xuXG4vLyBzcmMvdXRpbHMudHNcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBkZXRlY3RFbnZpcm9ubWVudCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBpZiAoZW52ID09PSBcImRldmVsb3BtZW50XCIgfHwgZW52ID09PSBcInRlc3RcIikge1xuICAgICAgcmV0dXJuIFwiZGV2ZWxvcG1lbnRcIjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBzZXRNb2RlKG1vZGUgPSBcImF1dG9cIikge1xuICBpZiAobW9kZSA9PT0gXCJhdXRvXCIpIHtcbiAgICB3aW5kb3cudmFtID0gZGV0ZWN0RW52aXJvbm1lbnQoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgd2luZG93LnZhbSA9IG1vZGU7XG59XG5mdW5jdGlvbiBnZXRNb2RlKCkge1xuICBjb25zdCBtb2RlID0gaXNCcm93c2VyKCkgPyB3aW5kb3cudmFtIDogZGV0ZWN0RW52aXJvbm1lbnQoKTtcbiAgcmV0dXJuIG1vZGUgfHwgXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc1Byb2R1Y3Rpb24oKSB7XG4gIHJldHVybiBnZXRNb2RlKCkgPT09IFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gXCJkZXZlbG9wbWVudFwiO1xufVxuZnVuY3Rpb24gcmVtb3ZlS2V5KGtleSwgeyBba2V5XTogXywgLi4ucmVzdCB9KSB7XG4gIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gcGFyc2VQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFwcm9wZXJ0aWVzKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm9wcyA9IHByb3BlcnRpZXM7XG4gIGNvbnN0IGVycm9yUHJvcGVydGllcyA9IFtdO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLnN0cmlwKSB7XG4gICAgICAgIHByb3BzID0gcmVtb3ZlS2V5KGtleSwgcHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGVycm9yUHJvcGVydGllcy5sZW5ndGggPiAwICYmICFvcHRpb25zLnN0cmlwKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3QgdmFsaWQ6ICR7ZXJyb3JQcm9wZXJ0aWVzLmpvaW4oXG4gICAgICAgIFwiLCBcIlxuICAgICAgKX0uIE9ubHkgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMsIGFuZCBudWxsIGFyZSBhbGxvd2VkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwcm9wcztcbn1cblxuLy8gc3JjL2dlbmVyaWMudHNcbmZ1bmN0aW9uIGluamVjdChwcm9wcyA9IHtcbiAgZGVidWc6IHRydWVcbn0pIHtcbiAgdmFyIF9hO1xuICBpZiAoIWlzQnJvd3NlcigpKVxuICAgIHJldHVybjtcbiAgc2V0TW9kZShwcm9wcy5tb2RlKTtcbiAgaW5pdFF1ZXVlKCk7XG4gIGlmIChwcm9wcy5iZWZvcmVTZW5kKSB7XG4gICAgKF9hID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIFwiYmVmb3JlU2VuZFwiLCBwcm9wcy5iZWZvcmVTZW5kKTtcbiAgfVxuICBjb25zdCBzcmMgPSBpc0RldmVsb3BtZW50KCkgPyBcImh0dHBzOi8vdmEudmVyY2VsLXNjcmlwdHMuY29tL3YxL3NjcmlwdC5kZWJ1Zy5qc1wiIDogXCIvX3ZlcmNlbC9pbnNpZ2h0cy9zY3JpcHQuanNcIjtcbiAgaWYgKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3NyY31cIl1gKSlcbiAgICByZXR1cm47XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHNjcmlwdC5zcmMgPSBzcmM7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNka25cIiwgbmFtZSk7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNka3ZcIiwgdmVyc2lvbik7XG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGlzRGV2ZWxvcG1lbnQoKSA/IFwiUGxlYXNlIGNoZWNrIGlmIGFueSBhZCBibG9ja2VycyBhcmUgZW5hYmxlZCBhbmQgdHJ5IGFnYWluLlwiIDogXCJCZSBzdXJlIHRvIGVuYWJsZSBXZWIgQW5hbHl0aWNzIGZvciB5b3VyIHByb2plY3QgYW5kIGRlcGxveSBhZ2Fpbi4gU2VlIGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2FuYWx5dGljcy9xdWlja3N0YXJ0IGZvciBtb3JlIGluZm9ybWF0aW9uLlwiO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtWZXJjZWwgV2ViIEFuYWx5dGljc10gRmFpbGVkIHRvIGxvYWQgc2NyaXB0IGZyb20gJHtzcmN9LiAke2Vycm9yTWVzc2FnZX1gXG4gICAgKTtcbiAgfTtcbiAgaWYgKGlzRGV2ZWxvcG1lbnQoKSAmJiBwcm9wcy5kZWJ1ZyA9PT0gZmFsc2UpIHtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWJ1Z1wiLCBcImZhbHNlXCIpO1xuICB9XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cbmZ1bmN0aW9uIHRyYWNrKG5hbWUyLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBfYSwgX2I7XG4gIGlmICghaXNCcm93c2VyKCkpIHtcbiAgICBjb25zdCBtc2cgPSBcIltWZXJjZWwgV2ViIEFuYWx5dGljc10gUGxlYXNlIGltcG9ydCBgdHJhY2tgIGZyb20gYEB2ZXJjZWwvYW5hbHl0aWNzL3NlcnZlcmAgd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIGluIGEgc2VydmVyIGVudmlyb25tZW50XCI7XG4gICAgaWYgKGlzUHJvZHVjdGlvbigpKSB7XG4gICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAoX2EgPSB3aW5kb3cudmEpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHdpbmRvdywgXCJldmVudFwiLCB7IG5hbWU6IG5hbWUyIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHtcbiAgICAgIHN0cmlwOiBpc1Byb2R1Y3Rpb24oKVxuICAgIH0pO1xuICAgIChfYiA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmNhbGwod2luZG93LCBcImV2ZW50XCIsIHtcbiAgICAgIG5hbWU6IG5hbWUyLFxuICAgICAgZGF0YTogcHJvcHNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGlzRGV2ZWxvcG1lbnQoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBzcmMvcmVhY3QudHN4XG5mdW5jdGlvbiBBbmFseXRpY3Moe1xuICBiZWZvcmVTZW5kLFxuICBkZWJ1ZyA9IHRydWUsXG4gIG1vZGUgPSBcImF1dG9cIlxufSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluamVjdCh7IGJlZm9yZVNlbmQsIGRlYnVnLCBtb2RlIH0pO1xuICB9LCBbYmVmb3JlU2VuZCwgZGVidWcsIG1vZGVdKTtcbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQge1xuICBBbmFseXRpY3MsXG4gIHRyYWNrXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIm5hbWUiLCJ2ZXJzaW9uIiwiaW5pdFF1ZXVlIiwid2luZG93IiwidmEiLCJhIiwicGFyYW1zIiwidmFxIiwicHVzaCIsImlzQnJvd3NlciIsImRldGVjdEVudmlyb25tZW50IiwiZW52IiwiZSIsInNldE1vZGUiLCJtb2RlIiwidmFtIiwiZ2V0TW9kZSIsImlzUHJvZHVjdGlvbiIsImlzRGV2ZWxvcG1lbnQiLCJyZW1vdmVLZXkiLCJrZXkiLCJfIiwicmVzdCIsInBhcnNlUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJvcHRpb25zIiwicHJvcHMiLCJlcnJvclByb3BlcnRpZXMiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzdHJpcCIsImxlbmd0aCIsIkVycm9yIiwiam9pbiIsImluamVjdCIsImRlYnVnIiwiX2EiLCJiZWZvcmVTZW5kIiwiY2FsbCIsInNyYyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiZGVmZXIiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiZXJyb3JNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwidHJhY2siLCJuYW1lMiIsIl9iIiwibXNnIiwid2FybiIsImRhdGEiLCJlcnIiLCJlcnJvciIsIkFuYWx5dGljcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/.pnpm/next@14.2.0-canary.62_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jarrodsterling/Documents/jarrod/jarrodsterling.com/node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jarrodsterling/Documents/jarrod/jarrodsterling.com/node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js#Analytics`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jarrodsterling/Documents/jarrod/jarrodsterling.com/node_modules/.pnpm/@vercel+analytics@1.1.3/node_modules/@vercel/analytics/dist/react/index.js#track`);


/***/ })

};
;