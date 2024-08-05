# Image OCR App
Simple app to mock the ocr workflow by mimicing the backend

### Manual Install
  #### Steps to install
  - Clone the Repo cd into the repo
  - Make sure you have ruby `3.1.4` installed
  - Also makesure that you have the nodejs install `v22.4.0`
  - Install yarn by running `npm install -g yarn`
  - Run `bin/setup`
  - Run `bin/dev` to run it via the development mode and run `RAILS_ENV=production rails assets:precompile && rails s` for production env.
  - Open [localhost](http://0.0.0.0:3000)

### Docker install
  #### Prerequisite
  - Make
  - Docker
  - Docker Compose

#### Commands available
I've added make to simplify the process command description is
  ```bash
    - make
      - install           [For installation]
      - clean             [For clean uninstall of project]
      - run               [For install + run]
      - stop              [For stopping everything]
      - shell             [For launching a bash shell in web container]
      - console           [For launching a rails console in web service]
      - attach            [For attaching the logs to current shell]
      - list              [For checking the running services]
  ```

#### Steps to install
  - `make install`
  - `make run`

After running launch
  [localhost](http://0.0.0.0:3000)
