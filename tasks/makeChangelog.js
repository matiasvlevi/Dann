const { Octokit } = require("octokit");

module.exports = function(grunt) {
  grunt.registerMultiTask('makechangelog', 'create a CHANGES.md based on releases',
    function() {
      let done = this.async();
      const octokit = new Octokit();

      // Request matiasvlevi/Dann releases
      octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: 'matiasvlevi',
        repo: 'dann',
        per_page: 200
      }).then(req => {
        releases = req.data;

        // Change log title
        let changelog = `# Change log \n\n<br/>\n\n`;

        for (let i = 0; i < releases.length; i++) {

          // Release tag title
          changelog += `# ${releases[i].tag_name}\n\n`;

          // Official release link
          changelog += `[See release](${releases[i].html_url})\n\n`;

          // Normalize to `###` titles
          changelog += releases[i].body.replace(/^# Changes$/gm, '### Changes');

          // Line breaks
          changelog += '\n\n<br/><br/>\n\n';

          // Older versions have very few documentation
          // And aren't relevant to the changelog
          if (releases[i].tag_name === 'v2.1.6') break;
        }

        // Write the changelog
        grunt.file.write(this.data.path, changelog);
        done();
      });
    }
  );
};