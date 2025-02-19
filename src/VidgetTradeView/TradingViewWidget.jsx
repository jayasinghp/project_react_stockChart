import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "width": "1440",
          "height": "610",
          "symbol": "NSE:TATAMOTORS",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "backgroundColor": "rgba(216, 216, 216, 1)",
          "gridColor": "rgba(73, 133, 231, 0.06)",
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
        const currentContainer = container.current;
        currentContainer.appendChild(script);
        return () => {
            currentContainer.innerHTML = "";
        };
    }, []);

    return (
        <div className="tradingview-widget-container1" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget1" style={{ height: "100%", width: "100%" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);


