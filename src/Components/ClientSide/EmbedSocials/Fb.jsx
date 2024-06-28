import React, { useEffect } from 'react';

const Fb = () => {
  useEffect(() => {
    // Load the Facebook SDK script
    const script = document.createElement('script');
    script.src = 'https://www.embedista.com/j/fbwidget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        frameBorder="0"
        width="600"
        height="400"
        src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&amp;container_width=600&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F/profile.php?id=61560094865541&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"
        title="Facebook Page"
      ></iframe>
      <div id="fbroot"></div>
      <div style={{ overflow: 'auto', position: 'absolute', height: 0, width: 0 }}>
        <a href="https://www.embedista.com/embed-facebook-feed">Embed Facebook Feed</a>
      </div>
      <div className="fblike" data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>
    </div>
  );
};

export default Fb;
