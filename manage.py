#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from pathlib import Path


def main():
    # Agrega backend/ al path para que Django encuentre config.settings
    sys.path.insert(0, str(Path(__file__).resolve().parent / 'backend'))

    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "No se pudo importar Django. Asegurate de tenerlo instalado y "
            "de haber activado el entorno virtual."
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
