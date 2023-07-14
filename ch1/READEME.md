# 타입스크립트 설정

### 컴파일 하기

타입스크립트 파일은 컴파일러를 통해 자바스크립트 파일로 변환 해야 실행이 가능하다. 따라서 다음 명령어를 통해 컴파일 하도록 하자

    tsc [이름].tsc

### tsconfig.json

파일 하나에 대한 컴파일을 할 때는 일일이 명령어를 입력하여 해도 크게 번거롭지 않다. 하지만 프로젝트 단위로 타입스크립트 파일이 생기고 관리를 해야할 경우에는 명령어 입력만으로는 큰 어려움이 따를 것이다.

따라서 프로젝트 단위로 타입스크립트 관련 설정을 할 수 있는 tsconfig.json 파일을 생성한다.

    tsc --init

1.  ### rootDir
    타입스크립트 파일이 위치할 root 디렉토리의 경로를 명시한다.
2.  ### outDir
    컴파일 결과물인 js 파일이 생성될 위치
3.  ### noEmitOnError
    컴파일 오류가 검출되었을 경우 자바스크립트 파일을 생성하지 않는다.
4.  ### include

        {
            "complieOptions": {...},
            "include": [
                "src"
            ]
        }

    inclue 안에 명시된 타입스크립트 파일만 자동으로 컴파일 한다.