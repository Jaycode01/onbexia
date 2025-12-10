import "./docs.css";

function Documentation() {
  return (
    <div className="doc-container">
      <nav className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
              <li>
                <a href="#installation">Installation</a>
                <ul>
                  <li>
                    <a href="#create-account">Create Your Account</a>
                  </li>
                  <li>
                    <a href="#build-tour">Build Your First Tour</a>
                  </li>
                  <li>
                    <a href="#embed-widget">Embedding the Widget</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#dashboard-guide">Dashboard Guide</a>
                <ul>
                  <li>
                    <a href="#dashboard-overview">Overview</a>
                  </li>
                  <li>
                    <a href="#navigate-dashboard">Navigate Your Dashboard</a>
                  </li>
                  <li>
                    <a href="#view-tours">View Your Tours</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className="content">
        <h1 id="introduction">Introduction</h1>
        <p>
          Welcome to the Onbexia documentation! Whether {`you're`} a developer
          integrating tours into your application or a product manager setting
          up your first onboarding experience, this guide will walk you through
          everything you need to know. Getting started with Onbexia is
          incredibly simple—in fact, most teams have their first tour live in
          under 5 minutes. This documentation covers the complete setup process,
          from creating your account to embedding tours on your website,
          customizing their appearance, and tracking user engagement.{` We've`}
          designed Onbexia to be as intuitive as possible, but we know that
          clear documentation makes all the difference. If you get stuck at any
          point or have questions that {`aren't`} covered here, our support team
          is always ready to help. {`Let's`} get you started on creating amazing
          onboarding experiences for your users!
        </p>

        <h2 id="getting-started">Getting Started</h2>
        <p>Follow these steps to get started.</p>

        <h2 id="installation">Installation</h2>
        <h3 id="create-account">Create Your Account</h3>
        <p>
          Getting started with Onbexia begins with creating your free account.
          Head over to our homepage and click the {`"Get Started"`} button in
          the header. {`You'll`} be asked to provide your email address and
          create a secure password — {`that's`} it! No credit card required, no
          lengthy forms, and no commitments. Once {`you've`} entered your
          details, check them correct, and {`you'll`} be automatically
          redirected to your dashboard. The entire process takes less than 60
          seconds. Already have an account? Simply click {`"Log In"`} instead
          and enter your credentials to access your dashboard. Once {`you're`}
          logged in, {`you're`} ready to create your first tour!
        </p>

        <h3 id="build-tour">Build Your First Tour</h3>
        <p>
          Now that {`you're`} logged into your dashboard, {`it's`} time to
          create your first onboarding tour. Click the {`"+ New Tour"`} button
          to get started. {`You'll`} be taken to a simple form where you can
          design your tour from start to finish. First, give your tour a
          memorable name—something like {`"Welcome Tour"`} or{" "}
          {`"Getting Started
          Guide"`}{" "}
          that helps you identify it later. Next, {`you'll`} add your tour
          steps. Each tour requires a minimum of 5 steps to ensure a complete
          onboarding experience. For each step, {`you'll`} fill in three key
          pieces of information: the step title (a short, attention-grabbing
          headline), the step description (the message you want to show users),
          and the target element (a CSS selector that tells the widget where to
          position the popup on your page). For example, if you want to
          highlight your main hero section, you might use {`"#hero"`} as the
          target element. If {`you're`} targeting a button with a class name,
          {`you'd`} use something like {`".signup-button"`}. {`Don't`} worry if
          {`you're`} not familiar with CSS selectors — {`we've`} included
          helpful examples and tips right in the form. You can add as many steps
          as you need beyond the minimum 5, and you can always come back later
          to edit, reorder, or remove steps. Once {`you've`} filled in all your
          step details, click {`"Save & Create Tour"`} at the bottom of the
          page. Your tour will be saved instantly, and {`you'll`} see a section
          at the bottom where you will copy the script for embedding.
          Congratulations — {`you've`} just created your first Onbexia tour!
        </p>

        <h3 id="embed-widget">Embedding Widget</h3>
        <p>
          Once your tour is created, {`it's`} time to add it to your website so
          visitors can experience your onboarding flow. From your dashboard,
          navigate to the tour you just created and click on it to view the
          details page. To add the tour to your website, simply copy this entire
          script tag. Next, open your
          {`website's`} HTML file or navigate to your {`site's`} code editor.
          {` You'll`} want to paste this script tag just before the closing{" "}
          {`"</body>"`} tag at the bottom of your page. This ensures the widget
          loads after your page content is ready, preventing any display issues.
          If {`you're`} using a content management system like WordPress, you
          can paste the code into your {`theme's`} footer section, a custom HTML
          widget, or use a plugin that allows you to add scripts to your site.
          For React, Next.js, or other JavaScript frameworks, you can add the
          script tag to your main layout file or use the {`framework's`} script
          loading methods. Once the code is in place, save your changes and
          refresh your website. The tour should appear automatically for
          first-time visitors. {`That's`} it — your onboarding tour is now live
          and guiding your users!
        </p>

        <h2 id="dashboard-guide">Dashboard Guide</h2>

        <h3 id="dashboard-overview">Overview</h3>
        <p>
          When you first log into Onbexia, {`you'll`} land on your main
          dashboard. The interface is designed to be simple and intuitive, with
          everything you need accessible from a single screen. On the left side,
          {`you'll`} see the sidebar navigation menu, which contains links to
          all major sections: Tours, and Analytics. The sidebar remains visible
          as you navigate between pages, making it easy to jump between
          different areas of the dashboard. The main content area on the right
          is where {`you'll`} interact with your tours—viewing your tour list,
          creating new tours, editing existing ones, or reviewing analytics. The
          layout is clean and responsive, working seamlessly whether {`you're`}{" "}
          on a desktop, tablet, or mobile device. Your current page is always
          highlighted in the sidebar so you know where you are at a glance.
        </p>

        <h3 id="navigate-dashboard">Navigate Your Dashboard</h3>
        <p>
          The sidebar is your command center for everything in Onbexia. At the
          top, {`you'll`} find the {`"Tours"`} link, which takes you to a page
          displaying all your created tours in a list or grid format. Click
          {`"Analytics"`} to view performance metrics and insights about how
          your tours are performing. The sidebar stays visible across all pages,
          so you can quickly switch between viewing your tours, checking
          analytics, or adjusting settings without losing your place. Active
          menu items are highlighted so you always know which section {`you're`}{" "}
          currently viewing.
        </p>

        <h3 id="view-tours">View Your Tours</h3>
        <p>
          Click {`"Tours"`} in the sidebar to see a complete list of all your
          created onboarding tours. Each tour is displayed as a card or row
          showing key information: the tour name, date created, and action
          buttons. From this page, you can quickly see all your tours at a
          glance, click on any tour to view its details or edit it, or delete
          tours you no longer need. At the top of the page, {`you'll`} find a
          prominent {`"+ New Tour"`} button that takes you to the tour creation
          form. If you have many tours, you can use the search bar to find
          specific ones by name.
        </p>
      </main>
    </div>
  );
}

export default Documentation;
