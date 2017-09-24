# LiveSupportApp/package

Manages some packages for [LiveSupport](https://github.com/LiveSupportApp/LiveSupport) app by branch.


## Branches

| Branch name                              | outline                                  |
| ---------------------------------------- | ---------------------------------------- |
| [master](https://github.com/LiveSupportApp/package/tree/master) | The sample package.                      |
| [default](https://github.com/LiveSupportApp/package/tree/default) | The default package.                     |
| [niconico](https://github.com/LiveSupportApp/package/tree/niconico) | The package to view message live Niconico. |
| [reading](https://github.com/LiveSupportApp/package/tree/reading) | The package to read message.             |
| [view](https://github.com/LiveSupportApp/package/tree/view) | The package to view message for broadcaster. |
| [store](https://github.com/LiveSupportApp/package/tree/store) | The package to store message.            |

## Usage

1. Move to `LiveSupport/resources/app/packages`

   ```
   $ cd path/to/LiveSupport/resources/app/packages
   ```

2. Clone what you want use package. *e.g. master branch (Sample package)*

   ```
   $ git clone -b master https://github.com/LiveSupportApp/LiveSupport.git
   ```

3. Rename to the package name. *e.g. master branch*

   ```
   $ mv package master
   ```

4. Install. `npm install`

   ```
   $ cd package
   $ npm install
   ```

5. Add the package name in LiveSupport app settings. See LiveSupport document. ***coming soon***

6. Happy broadcasting!

## Contribution

1. [Fork](https://github.com/LiveSupportApp/package/fork) it.
2. Create your feature branch. `git checkout -b my-new-feature`
3. Commit your changes. `git commit -am 'Add some feature'`
4. Push to the branch. `git push origin my-new-feature`
5. Create a new Pull Request.

## License

[MIT](https://github.com/LiveSupportApp/package/blob/master/LICENSE)

## Author

[yuta0801](https://github.com/yuta0801)
