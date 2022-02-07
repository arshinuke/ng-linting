module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-min-length': [2, 'always', 10],
        'header-max-length': [2, 'always', 100],
        'subject-case': [2, 'always', ['sentence-case']],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'test', 'build', 'ci']]
    }
};
